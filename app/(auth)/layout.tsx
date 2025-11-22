import Link from "next/link";
import Image from "next/image";

const layout = ({children}: {children : React.ReactNode}) => {
    return ( 
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hiden-default">
                <Link href="/" className="auth-logo"> 
                    <Image src="/assets/icons/logo.png" alt='InvestApp Logo' width={140} height={40} className="h-8 w-auto"/>
                </Link>

                <div className="pb-6 lg:pb-8 flex-1">{children}</div>
            </section>

            <section className="auth-right-section">
                <div className="z-10 relative lg:mt-4 lg:mb-16">
                    <blockquote className="auth-blockquote">
                        "Siempre fui escéptico con las inversiones. Pensaba que era demasiado complicado o solo para expertos. Pero con InvestApp. me sentí en control desde el primer día. Sus herramientas educativas son geniales y su interfaz es tan limpia que invertir se siente como algo natural. En seis meses, he visto crecer mi fondo de emergencia más de lo que jamás lo hizo en el banco. ¡Ahora invierto con confianza y sin estrés!"
                    </blockquote>
                    <div className="flex items-center justify-between">
                        <div>
                            <cite className="autho-testimonial-author">Justin B.</cite>
                            <p className="max-md:text-xs text-gray-500">Emprendedor</p>
                        </div>
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Image src="/assets/icons/star.svg" alt="star" key={star} width={20} height={20} className="w-5 h-5"/>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <Image src="/assets/images/dashboard.png" alt="Dashboard Preview" width={1440} height={1150} className="auth-dashboard-preview absolute top-0"/>
                </div>
            </section>
        </main>
     );
}
 
export default layout;