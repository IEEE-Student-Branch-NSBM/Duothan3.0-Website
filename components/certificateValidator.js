import Container from "./container";

function CertficateValidator() {
    return (
   <div id="cert">
        <Container className="flex flex-wrap">
            <h1 className="box-border border-b-2 border-[#E52145] pt-4  pb-0.5 text-center text-2xl font-semibold text-red w-full">
            CERTIFICATE VALIDATOR
            </h1>
            <div className="w-full">
                <iframe
                src="https://script.google.com/macros/s/AKfycbzE64RuOhcCDl9tA0q22Z8acAuwiv0-qI-XaBIe9a4hR3IIPOVZ1QbmqRe_MnGykr55jA/exec"
                style={{ width: "100%", height: "100vh"}}
                ></iframe>
            </div>
        </Container>
   </div>
    );
  }
  
  export default CertficateValidator;
  