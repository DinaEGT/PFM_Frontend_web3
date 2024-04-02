export default function Header (){
    return(
         <header className="border-b shadow py-2  px-3" flex justify-beetween items-center>
            {/*Logo para versión mobile*/}
    <img src="small_logo.png" alt="public-mobile-logo" className="sm:hidden" width={50}/>
            {/*Logo para versión desktop*/}
    <img src="/BM_Proyect_logo_pestaña.png" alt="public-desktop-logo" className="hidden sm:block" width={300}/>
    <button className="bg-gray-100 rounded-xl px-2 text-sm h-fit py-2" > Conect Wallet</button>
    </header>
    )
}