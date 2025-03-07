import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar />

            {/* About Section - Compact, Centered & Styled */}
            <section className="flex flex-col items-center justify-center flex-grow text-center px-6 bg-gradient-to-br from-blue-100 via-green-100 to-gray-100">
                <div className="max-w-3xl bg-white p-10 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-800">🌍 Why BinWise Exists</h1>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        Growing up in Delhi, I witnessed firsthand the severe impact of pollution and waste mismanagement.
                        The air is thick with smog, and the streets are often filled with mixed trash—plastic, food waste, and hazardous materials—all discarded together, making proper recycling nearly impossible.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        This raised a question: <strong>How can we make waste segregation easier for everyone?</strong>
                        That’s what inspired me to create BinWise—an intuitive tool that allows anyone to scan an item and instantly determine the correct disposal bin.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        BinWise leverages <strong>computer vision</strong> for object detection, followed by a <strong>large language model (LLM)</strong> to assist in waste classification.
                        The system intelligently stores previously classified items in a <strong>database</strong>, reducing redundant calls and ensuring faster, more efficient responses.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        By combining AI with smart data management, <strong>BinWise transforms waste disposal from a confusing process into a simple, actionable step toward a cleaner future.</strong>
                    </p>
                </div>
            </section>

            {/* Footer - Small & Simple */}
            <footer className="py-4 bg-gray-800 text-white text-center text-sm opacity-75">
                📧 Have suggestions? Reach out at <strong>rheauppal547@gmail.com</strong>
                <br />© 2025 BinWise. All Rights Reserved.
            </footer>
        </div>
    );
}
