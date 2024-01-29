import "./Rodape.css"

export const Rodape = () => {
    return (
        <footer className="rodape-footer">
            <div className="rodape-left">
                <div className="rodape-logo-social">
                    <img src="/imagens/fb.png" alt="facebook"/>
                    <img src="/imagens/tw.png" alt="twitter"/>
                    <img src="/imagens/ig.png" alt="instagram"/>
                </div>
            </div>
            <div className="rodape-center">
                <div className="rodape-logo-organo">
                    <img src="/imagens/logo.png" alt="organo"/>
                </div>
            </div>
            <div className="rodape-right">                
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}