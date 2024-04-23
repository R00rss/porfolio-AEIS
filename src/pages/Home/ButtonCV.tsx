import DownloadIcon from "../../components/Icons/DownloadIcon"
import CvPdf from "../../assets/cv/fake_cv.pdf"


export default function ButtonCV() {

    function downloadCV(fileName: string) {
        const pdf = document.createElement('a');
        pdf.href = CvPdf
        pdf.download = fileName
        pdf.click();
    }

    return (
        <button className="
        center_position_absolute 
        absolute
        bg-primary-900 
        shadow_cv_button
        w-24 h-24 
        rounded-full
        flex
        justify-center items-center
        flex-col
        "
            onClick={() => downloadCV('Ronny Garcia CV.pdf')}
        >
            <div className="w-10 h-10">
                <DownloadIcon />
            </div>
            <span className="text-slate-50 font-semibold text-3xl">CV</span>
        </button>
    )
}
