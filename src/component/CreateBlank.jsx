import React, { useState, useRef, useEffect } from 'react';
import {
  Wand2,
  Heading1,
  Heading2,
  Type,
  Minus,
  Plus,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link as LinkIcon,
  MoreVertical,
  ChevronDown,
  Check
} from 'lucide-react';

const CreateBlank = () => {
  const [fontSize, setFontSize] = useState(32);
  const [activeHeading, setActiveHeading] = useState('H1');
  const [fontFamily, setFontFamily] = useState('Inter');
  const [content, setContent] = useState('');
  const [showSlashMenu, setShowSlashMenu] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState('left');
  const [listType, setListType] = useState(null);
  const editorRef = useRef(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (content.endsWith('/')) {
      setShowSlashMenu(true);
    } else {
      setShowSlashMenu(false);
    }
  }, [content]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const adjustFontSize = (delta) => {
    setFontSize((prev) => Math.max(12, Math.min(72, prev + delta)));
  };

  const handleMagicWrite = () => {
    setIsGenerating(true);
    setShowSlashMenu(false);
    setContent('');

    const text = "The future of design is collaborative, intuitive, and powered by AI. It adapts to your workflow, not the other way around.";
    let i = 0;
    const interval = setInterval(() => {
      setContent((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 30);
  };

  const getFontFamily = () => {
    switch (fontFamily) {
      case 'Merriweather': return '"Merriweather", serif';
      case 'Inter':
      default: return '"Inter", sans-serif';
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col text-slate-800 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
      `}</style>

      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleMagicWrite}
            className="flex items-center space-x-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-lg transition-all text-sm font-semibold shadow-sm border border-indigo-100"
          >
            <Wand2 size={16} className={isGenerating ? "animate-pulse" : ""} />
            <span>Magic Write</span>
          </button>
          <div className="h-6 w-px bg-gray-200" />

          <div className="flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => setActiveHeading('H1')}
              className={`px-3 py-1.5 rounded-md text-sm font-bold transition-all ${activeHeading === 'H1' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              H1
            </button>
            <button
              onClick={() => setActiveHeading('H2')}
              className={`px-3 py-1.5 rounded-md text-sm font-bold transition-all ${activeHeading === 'H2' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              H2
            </button>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg transition-colors min-w-[140px] justify-between">
              <span className="text-sm font-medium text-gray-700">{fontFamily}</span>
              <ChevronDown size={14} className="text-gray-400" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 hidden group-hover:block animate-in fade-in zoom-in-95 duration-100">
              {['Inter', 'Merriweather', 'Arial', 'Georgia'].map((font) => (
                <button
                  key={font}
                  onClick={() => setFontFamily(font)}
                  className="w-full text-left px-4 py-2 hover:bg-indigo-50 flex items-center justify-between text-sm text-gray-700"
                >
                  <span style={{ fontFamily: font === 'Inter' ? 'Inter' : font === 'Merriweather' ? 'Merriweather' : 'sans-serif' }}>{font}</span>
                  {fontFamily === font && <Check size={14} className="text-indigo-600" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 bg-white rounded-lg p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => adjustFontSize(-2)}
              className="p-1.5 hover:bg-gray-100 rounded-md text-gray-600 disabled:opacity-30 transition-colors"
              disabled={fontSize <= 12}
            >
              <Minus size={16} />
            </button>
            <span className="w-10 text-center text-sm font-bold text-gray-800">{fontSize}</span>
            <button
              onClick={() => adjustFontSize(2)}
              className="p-1.5 hover:bg-gray-100 rounded-md text-gray-600 disabled:opacity-30 transition-colors"
              disabled={fontSize >= 72}
            >
              <Plus size={16} />
            </button>
          </div>
          <div className="h-6 w-px bg-gray-200" />

          <div className="flex items-center space-x-0.5 bg-gray-50 p-1 rounded-lg border border-gray-200">
            <ToolbarButton icon={<Bold size={18} />} active={isBold} onClick={() => setIsBold(!isBold)} />
            <ToolbarButton icon={<Italic size={18} />} active={isItalic} onClick={() => setIsItalic(!isItalic)} />
            <ToolbarButton icon={<Underline size={18} />} active={isUnderline} onClick={() => setIsUnderline(!isUnderline)} />
          </div>
          <div className="h-6 w-px bg-gray-200" />

          <div className="flex items-center space-x-0.5 bg-gray-50 p-1 rounded-lg border border-gray-200">
            <ToolbarButton icon={<AlignLeft size={18} />} active={textAlign === 'left'} onClick={() => setTextAlign('left')} />
            <ToolbarButton icon={<AlignCenter size={18} />} active={textAlign === 'center'} onClick={() => setTextAlign('center')} />
            <ToolbarButton icon={<AlignRight size={18} />} active={textAlign === 'right'} onClick={() => setTextAlign('right')} />
          </div>
          <div className="h-6 w-px bg-gray-200" />

          <div className="flex items-center space-x-0.5 bg-gray-50 p-1 rounded-lg border border-gray-200">
            <ToolbarButton icon={<List size={18} />} active={listType === 'bullet'} onClick={() => setListType(listType === 'bullet' ? null : 'bullet')} />
            <ToolbarButton icon={<ListOrdered size={18} />} active={listType === 'number'} onClick={() => setListType(listType === 'number' ? null : 'number')} />
          </div>
          <div className="h-6 w-px bg-gray-200" />

          <ToolbarButton icon={<LinkIcon size={18} />} />
          <ToolbarButton icon={<MoreVertical size={18} />} />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto py-12 px-4 flex justify-center">
        <div className="w-full max-w-[900px] bg-white min-h-[1000px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] rounded-sm relative transition-all duration-300">
          <div className="p-16 h-full">
            <div className="relative group">
              <div className="relative">
                <textarea
                  ref={editorRef}
                  value={content}
                  onChange={handleContentChange}
                  disabled={isGenerating}
                  className={`w-full resize-none outline-none bg-transparent transition-all duration-200
                    ${isBold ? 'font-bold' : ''}
                    ${isItalic ? 'italic' : ''}
                    ${isUnderline ? 'underline' : ''}
                    ${isGenerating ? 'text-indigo-600' : 'text-gray-800 placeholder-gray-300'}
                  `}
                  style={{
                    fontSize: `${fontSize}px`,
                    lineHeight: '1.6',
                    fontFamily: getFontFamily(),
                    minHeight: '200px',
                    textAlign: textAlign,
                    paddingLeft: listType === 'bullet' ? '1.5em' : '0',
                    listStyleType: listType === 'bullet' ? 'disc' : 'none'
                  }}
                  placeholder="Start typing or hit / for Magic Write"
                />

                <div className="absolute -left-12 top-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md transition-all">
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {showSlashMenu && (
                <div className="absolute top-full left-0 mt-4 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                  <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Basic Blocks
                  </div>
                  <button
                    onClick={handleMagicWrite}
                    className="w-full text-left px-4 py-3 hover:bg-indigo-50 flex items-center space-x-3 text-gray-700 transition-colors group"
                  >
                    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg group-hover:bg-indigo-200 transition-colors">
                      <Wand2 size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Magic Write</div>
                      <div className="text-xs text-gray-500">Generate text with AI</div>
                    </div>
                  </button>
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-3 text-gray-700 transition-colors">
                    <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                      <Heading1 size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Heading 1</div>
                      <div className="text-xs text-gray-500">Large section heading</div>
                    </div>
                  </button>
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-3 text-gray-700 transition-colors">
                    <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                      <Type size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Text Block</div>
                      <div className="text-xs text-gray-500">Start writing with plain text</div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const ToolbarButton = ({ icon, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-md transition-all duration-200 ${
      active
        ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5'
        : 'text-gray-500 hover:bg-gray-200 hover:text-gray-900'
    }`}
  >
    {icon}
  </button>
);

export default CreateBlank;