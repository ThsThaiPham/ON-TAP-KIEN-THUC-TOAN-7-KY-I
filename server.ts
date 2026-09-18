import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // API Health Check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // AI Assistant endpoint grounded in SGK & SGV Toán 7 KNTT
  app.post("/api/chat", async (req, res) => {
    try {
      const { prompt, chapterContext } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "Thiếu nội dung câu hỏi (prompt)." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "Chưa cấu hình GEMINI_API_KEY trong hệ thống.",
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const systemPrompt = `Bạn là Chuyên gia Cố vấn Sư phạm Toán học Trung học cơ sở trong ứng dụng "ÔN TẬP KIẾN THỨC TOÁN 7 KỲ I" của tác giả: Thầy giáo Ths. Phạm Ngọc Thái, chuyên sâu về bộ sách "Toán 7 - Kết nối tri thức với cuộc sống" (Nhà xuất bản Giáo dục Việt Nam, Tổng chủ biên GS. Hà Huy Khoái) theo Chương trình GDPT 2018.

Tài liệu bạn nắm vững bao gồm:
1. Toàn bộ 5 chương Kỳ I: Chương 1 (Tập hợp các số hữu tỉ), Chương 2 (Số thực), Chương 3 (Góc và đường thẳng song song), Chương 4 (Tam giác bằng nhau), Chương 5 (Thu thập và biểu diễn dữ liệu) và các bài thực hành trải nghiệm (GeoGebra, Dân số).
2. Sách Giáo Viên (SGV) Toán 7: Ma trận đề kiểm tra 3 mức độ nhận thức (Nhận biết - Thông hiểu - Vận dụng), các cạm bẫy học sinh hay mắc lỗi, lưu ý tránh sai sót và phương pháp giải chi tiết từng bài.

Nhiệm vụ của bạn:
- Giải thích cặn kẽ câu hỏi toán học mà học sinh hoặc giáo viên thắc mắc theo phong cách ân cần, chuẩn mực sư phạm của Thầy giáo Ths. Phạm Ngọc Thái.
- Chỉ rõ lỗi sai phổ biến của học sinh (nhầm lẫn số mũ, quên đổi dấu khi chuyển vế, nhầm góc kề bù với phụ nhau, nhầm điều kiện c.g.c góc xen giữa, v.v.) và cách phòng tránh.
- Đưa ra lời giải bài tập từng bước logic, chuẩn mực toán học theo chương trình mới 2018.`;

      const contents = [
        chapterContext ? `[Ngữ cảnh chương/chủ đề đang chọn: ${chapterContext}]\n\nCâu hỏi: ${prompt}` : prompt
      ];

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        },
      });

      return res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      return res.status(500).json({
        error: err?.message || "Đã xảy ra lỗi khi gọi AI phân tích.",
      });
    }
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
