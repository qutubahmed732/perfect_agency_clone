

function Footer() {
    return (
        <footer className="py-12 bg-[#111827] text-neutral-400 w-full flex flex-col gap-5">
            <h1 className="text-2xl text-white hover:text-[#6ee7b7] font-bold text-center cursor-pointer transition-all duration-100">Pfeifer Media</h1>
            <p className="text-center">Teaching businesses to build their own marketing success</p>
            <p className="text-center flex items-center justify-center gap-6">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms & Conditions</a>
            </p>
            <p class="text-center text-sm">© 2025 The Perfect Agency. All rights reserved.</p>
        </footer>
    )
}

export default Footer