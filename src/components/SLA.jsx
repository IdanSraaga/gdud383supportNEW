import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { zoomPlugin } from '@react-pdf-viewer/zoom';


const pdfjs = await import('pdfjs-dist/build/pdf');
const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
console.log('Rendering SLA');

const SLA = () => {
    const zoomPluginInstance = zoomPlugin();

    const { Zoom } = zoomPluginInstance;
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    borderBottom: '1px solid rgba(0, 0, 0, .3)',
                    padding: '0.25rem 0',
                    justifyContent: 'center',
                }}
            >
                <Zoom levels={[0.4, 0.8, 1.2, 1.6, 2.4, 3.2]} />
            </div>
            <div
                style={{
                    flex: 1,
                }}
            >      <Worker >

                <Viewer fileUrl={require('../misc/sample.pdf')} plugins={[zoomPluginInstance]} />
                </Worker>
            </div>
        </div>        

    );

}
export default SLA;