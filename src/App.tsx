import React, { useState } from 'react';
import { Header, ActiveTabType } from './components/Header';
import { QuizView } from './components/QuizView';
import { TheorySummaryTab } from './components/TheorySummaryTab';
import { OverviewTab } from './components/OverviewTab';
import { CurriculumComparisonTab } from './components/CurriculumComparisonTab';
import { ChaptersDetailTab } from './components/ChaptersDetailTab';
import { PedagogyAndCompetencyTab } from './components/PedagogyAndCompetencyTab';
import { ExerciseLookupTab } from './components/ExerciseLookupTab';
import { HistoryTab } from './components/HistoryTab';
import { AiAssistantModal } from './components/AiAssistantModal';
import { StudentInfo } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTabType>('quiz');
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [aiContext, setAiContext] = useState<string>('');

  const [student, setStudent] = useState<StudentInfo>({
    fullName: '',
    className: '',
    schoolName: ''
  });

  const handleOpenAiWithContext = (context: string) => {
    setAiContext(context);
    setIsAiModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-800 flex flex-col font-sans selection:bg-amber-100 selection:text-emerald-950">
      {/* Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAiModal={() => {
          setAiContext('');
          setIsAiModalOpen(true);
        }}
        studentName={student.fullName}
        studentClass={student.className}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'quiz' && (
          <QuizView
            student={student}
            setStudent={setStudent}
            onOpenAiHelp={handleOpenAiWithContext}
            onNavigateToHistory={() => setActiveTab('history')}
          />
        )}
        {activeTab === 'history' && (
          <HistoryTab onNavigateToQuiz={() => setActiveTab('quiz')} />
        )}
        {activeTab === 'theory' && <TheorySummaryTab />}
        {activeTab === 'exercises' && <ExerciseLookupTab />}
        {activeTab === 'chapters' && <ChaptersDetailTab />}
        {activeTab === 'comparison' && <CurriculumComparisonTab />}
        {activeTab === 'pedagogy' && <PedagogyAndCompetencyTab />}
        {activeTab === 'overview' && (
          <OverviewTab onNavigateToChapters={() => setActiveTab('chapters')} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-800">Ứng dụng: ÔN TẬP KIẾN THỨC TOÁN 7 KỲ I</span>
            <span>•</span>
            <span className="font-semibold text-emerald-800">Tác giả: Thầy giáo Ths. Phạm Ngọc Thái</span>
            <span>•</span>
            <span>NXB Giáo Dục Việt Nam</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Chương trình Giáo dục Phổ thông 2018</span>
            <span>•</span>
            <span>SGK Kết Nối Tri Thức Với Cuộc Sống</span>
          </div>
        </div>
      </footer>

      {/* AI Assistant Modal */}
      <AiAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        initialQuery={aiContext}
      />
    </div>
  );
}
