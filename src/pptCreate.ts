import pptxgen from "pptxgenjs";

export function pptCreate() {
    let pptx = new pptxgen();
    let slide = pptx.addSlide();
    pptx.writeFile({ fileName: "Test.pptx" });
}