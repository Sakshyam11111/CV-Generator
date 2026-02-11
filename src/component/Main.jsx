import { useState } from 'react';
import TemplateSelection from './TemplateSelection';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

export default function Main() {
  const [view, setView] = useState('selection');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [cvData, setCvData] = useState(null);

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setView('form');
  };

  const handleFormSubmit = (formData) => {
    setCvData(formData);
    setView('preview');
  };

  const handleChangeTemplate = (newTemplate) => {
    setSelectedTemplate(newTemplate);
  };

  const handleEdit = () => {
    setView('form');
  };

  const handleBackToForm = () => {
    setView('form');
  };

  return (
    <>
      {view === 'selection' && (
        <TemplateSelection onSelect={handleSelectTemplate} />
      )}

      {view === 'form' && (
        <CVForm
          template={selectedTemplate}
          onSubmit={handleFormSubmit}
          onBack={() => setView('selection')}
        />
      )}

      {view === 'preview' && cvData && (
        <CVPreview
          data={cvData}
          template={selectedTemplate}
          onChangeTemplate={handleChangeTemplate}
          onEdit={handleEdit}
          onBack={handleBackToForm}
        />
      )}
    </>
  );
}