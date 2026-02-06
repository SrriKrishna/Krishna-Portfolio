const Footer = () => {
    return (
        <footer className="py-8 bg-gray-900/50 text-center border-t border-gray-800">
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} SrriKrishna. All rights reserved.
            </p>
            {/* <p className="text-gray-600 text-xs mt-2">
                Designed with <span className="text-red-500">♥</span> & React
            </p> */}
        </footer>
    );
};

export default Footer;
