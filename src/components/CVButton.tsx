import { useEffect, useState } from 'react';
import { portfolio } from '../data/portfolio';
import { FileDown } from 'lucide-react';

export function CVButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const checkCVUpdate = async () => {
      const docId = import.meta.env.VITE_GOOGLE_DOCS_ID;
      const lastDownloaded = localStorage.getItem('cvLastDownloaded');

      if (!docId) return;

      const docLastModified = await fetchDocLastModified(docId);
      const now = new Date().toISOString();

      // if (!lastDownloaded || docLastModified > lastDownload
      //
      // )
        setIsUpdated(true);
    };

    checkCVUpdate();
  }, []);

  const downloadPDF = async (docId: string) => {
  };

  const fetchDocLastModified = async (docId: string) => {
    return new Date().toISOString(); // Заміни на реальну логіку
  };

  return (
    <section className="section cv-section">
      <div className="cv-card">
        <div>
          <p className="eyebrow"><span/> CURRICULUM VITAE</p>
          <h2>Want the full picture?</h2>
          <p>Download my CV for experience, projects and technical details.</p>
        </div>
        <a className="button button-primary" href={portfolio.cv.download} download>
          <FileDown size={18}/> Download CV PDF
        </a>
      </div>
    </section>
  );
}
