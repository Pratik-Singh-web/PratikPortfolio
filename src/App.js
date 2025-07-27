import React, { useState, useEffect } from 'react';

// ICONS - Using SVG for icons to ensure they look sharp and load fast.
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800 dark:text-yellow-400">
    <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const BrushStrokeIcon = () => (
    <svg width="340" height="160" viewBox="0 0 340 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto text-teal-400 dark:text-teal-500 opacity-80">
        <path d="M288.452 156.241C288.452 156.241 185.732 170.271 115.344 145.21C44.9554 120.149 2.50001 82.5293 2.50001 39.7027C2.50001 10.925 33.6265 -3.99999 33.6265 -3.99999C33.6265 -3.99999 105.617 -13.6234 191.569 22.6865C277.521 59.0013 337.5 59.0013 337.5 98.6532C337.5 138.305 288.452 156.241 288.452 156.241Z" fill="currentColor"/>
    </svg>
);

// MOCK DATA
const services = [
    { icon: '📱', title: 'iOS Development', description: 'Building scalable and user-centric native iOS apps with Swift & SwiftUI.' },
    { icon: '🤖', title: 'AI Integration', description: 'Integrating intelligent AI/ML models into mobile applications to solve real-world problems.' },
    { icon: '📈', title: 'Stock Investing', description: 'Advising and investing in early-stage startups in AI, mobile, and fintech.' },
];

// Experience data - now ordered from oldest to newest for numbering 1 to N
const experiences = [
    { role: 'Computer Science Graduate', company: 'Kamla Nehru Institute of Technology', period: '2018 - 2022', description: 'Graduated with a strong foundation in software engineering, algorithms, and data structures.' },
    { role: 'Stock Market Investor', company: 'Self-Managed Portfolio', period: '2020 - Present', description: 'Practicing a balanced approach of fundamental and technical analysis to manage a personal equity portfolio with 4+ years of experience.' },
    { role: 'iOS Developer', company: 'IndiaMART', period: '2022 - Present', description: 'Developed and maintained IndiaMART main iOS applications, focusing on performance, UI/UX, and scalability.' },
    { role: 'AI Engineer (Transitioning)', company: 'Self-Study & Projects', period: '2025 - Present', description: 'Deep diving into machine learning, large language models, and their application in mobile contexts.' },
];

const projects = [
    {
        title: "MediScan AI",
        description: "An intelligent personal medical assistant app that scans medicine packaging to provide comprehensive details such as manufacturing company, salt composition, usage instructions, recommended dosages, and potential side effects. This AI-integrated application aims to prevent medication errors and empower users with accurate health information. The app leverages advanced computer vision for scanning and natural language processing to extract and present medical information clearly. It's designed with a user-friendly interface, ensuring that critical health data is accessible and understandable to everyone, regardless of their technical proficiency. The integration of AI allows for real-time analysis and personalized insights, making it a truly indispensable tool for personal health management.",
        imageUrl: "https://placehold.co/600x400/0d9488/ffffff?text=MediScan+AI", // Placeholder, replace with generated image
        tags: ["SwiftUI", "CoreML", "Vision", "AI", "Healthcare"],
        link: "https://github.com/Pratik-Singh-web/MediScanAI"
    },
    {
        title: "FinWise Expense Tracker",
        description: "A personal monthly expense tracker application designed to help users manage their finances effectively. It tracks daily expenses, provides detailed summaries, and offers AI-driven suggestions for cost-cutting. The app analyzes spending patterns to identify areas for financial optimization, acting as a smart finance manager. FinWise goes beyond simple tracking by categorizing expenses, visualizing spending habits through intuitive charts, and providing actionable recommendations to help users save money. Its AI engine learns from user behavior to offer personalized budget adjustments and identify unnecessary expenditures, promoting healthier financial habits.",
        imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=FinWise+Tracker", // Placeholder, replace with generated image
        tags: ["UIKit", "Core Data", "AI", "Data Analysis", "Fintech"],
        link: "https://github.com/Pratik-Singh-web/FinWiseTracker"
    },
    {
        title: "QuickTranslate macOS Tool",
        description: "A lightweight and efficient macOS tool that enables instant text translation. Users can simply copy any text, and with a customizable keyboard shortcut, the tool provides a quick translation, streamlining workflows for multilingual users and researchers. This utility focuses on speed and ease of access. QuickTranslate integrates seamlessly into the macOS environment, offering a non-intrusive way to get translations on the fly. It supports multiple languages and provides a clean, pop-up interface for displaying translations, making it an essential productivity tool for anyone working with diverse linguistic content.",
        imageUrl: "https://placehold.co/600x400/be185d/ffffff?text=QuickTranslate", // Placeholder, replace with generated image
        tags: ["Swift", "AppKit", "macOS", "Utility", "Productivity"],
        link: "https://github.com/Pratik-Singh-web/QuickTranslate"
    },
];

const blogPosts = [
    {
        title: "Why Swift is the Future of Mobile Development",
        date: "July 20, 2025",
        excerpt: "An in-depth look at the advantages of Swift over other languages and why it's poised to dominate the mobile landscape...",
        content: `Swift has rapidly evolved into a powerful and intuitive language, making it the top choice for iOS, macOS, watchOS, and tvOS development. Its modern syntax, safety features, and performance capabilities set it apart. When Apple introduced Swift in 2014, it wasn't just another programming language; it was a statement of intent. Designed to be safe, fast, and modern, Swift aimed to address the shortcomings of its predecessor, Objective-C, while offering a more approachable syntax for new developers. Today, nearly a decade later, Swift has not only fulfilled that promise but has also cemented its position as a cornerstone of the Apple ecosystem and a strong contender in the broader mobile development landscape.

One of Swift's most compelling features is its emphasis on safety. Unlike many other languages, Swift is designed to eliminate entire classes of common programming errors. Features like automatic memory management (ARC), nil optionals, and robust error handling mechanisms significantly reduce crashes and unpredictable behavior. This focus on safety translates directly into more stable and reliable applications, which is paramount for user experience and trust. For developers, it means spending less time debugging elusive memory leaks or null pointer exceptions and more time building innovative features.

Beyond safety, Swift boasts impressive performance. It's built on the high-performance LLVM compiler, which optimizes code to run at lightning speeds on Apple's hardware. This efficiency is crucial for demanding mobile applications, from graphically intensive games to complex data processing apps, ensuring a smooth and responsive user experience. Benchmarks often show Swift outperforming Objective-C and even rivaling C++ in certain scenarios, making it a powerhouse for native app development.

The evolution of Swift is intrinsically linked with SwiftUI, Apple's declarative UI framework. Introduced in 2019, SwiftUI revolutionized how user interfaces are built across all Apple platforms. With SwiftUI, developers can create stunning, adaptive UIs with significantly less code, leveraging a declarative syntax that is intuitive and easy to understand. The ability to preview UI changes in real-time and share code across iOS, macOS, watchOS, and tvOS drastically accelerates the development cycle and reduces overhead. This synergy between Swift and SwiftUI creates an incredibly productive and enjoyable development environment.

Furthermore, Swift's open-source nature, announced in 2015, has been a game-changer. By opening up the language to the wider community, Apple fostered a vibrant ecosystem of contributors, driving continuous improvement and innovation. This has led to the development of Swift on Server, enabling developers to use Swift for backend services, and a growing presence on Linux, expanding its reach beyond Apple's hardware. The Swift Package Manager, a powerful tool for managing dependencies, further simplifies sharing and reusing code within the community.

The adoption of Swift by major companies like LinkedIn, Airbnb, Slack, and Lyft underscores its reliability and scalability. These industry giants trust Swift for building their core applications, a testament to its robust capabilities and future-proof design. For businesses, investing in Swift development means faster time-to-market, lower maintenance costs due to cleaner code, and the ability to deliver high-quality, performant applications that stand out in a competitive market.

In conclusion, Swift's journey from a promising new language to a mature, versatile, and powerful tool has been remarkable. Its unwavering focus on safety, exceptional performance, seamless integration with modern UI frameworks like SwiftUI, and a thriving open-source community position it as not just a language for today, but definitively the future of mobile development within the Apple ecosystem and increasingly beyond. For any developer looking to build impactful and high-quality applications, mastering Swift is not just an option, but a strategic imperative.`,
        link: "https://yourblog.com/swift-future-mobile"
    },
    {
        title: "Integrating CoreML into Your First iOS App",
        date: "June 15, 2025",
        excerpt: "A step-by-step tutorial for beginners on how to leverage Apple's CoreML framework to build intelligent applications.",
        content: `The world of mobile applications is rapidly evolving, with Artificial Intelligence (AI) and Machine Learning (ML) becoming increasingly integral to delivering intelligent and personalized user experiences. For iOS developers, Apple's CoreML framework provides a powerful and streamlined way to integrate pre-trained machine learning models directly into their applications. This enables on-device inference, offering significant advantages in terms to privacy, speed, and offline capabilities. In this comprehensive tutorial, we'll walk you through the process of integrating your first CoreML model into an iOS app, making your application smarter and more responsive.

**What is CoreML?**

At its core, CoreML is a framework that allows you to integrate trained machine learning models into your apps. It acts as a bridge between your app's code and the complex mathematical operations of an ML model. Crucially, CoreML performs inference (making predictions) directly on the device, leveraging Apple's Neural Engine for optimized performance on compatible hardware. This means your app doesn't need to send data to a cloud server for processing, ensuring user privacy and enabling functionality even without an internet connection.

**Benefits of On-Device ML with CoreML:**

1.  **Privacy:** User data remains on the device, minimizing privacy concerns associated with cloud-based processing.
2.  **Speed:** Eliminating network latency results in near-instantaneous predictions, enhancing the user experience.
3.  **Offline Capability:** Your app's ML features work seamlessly even when the user is offline or has a poor network connection.
4.  **Reduced Server Costs:** Less reliance on cloud APIs can lead to significant cost savings for developers.
5.  **Optimized for Apple Hardware:** CoreML is highly optimized for Apple's silicon, ensuring efficient use of resources and battery life.

**Step-by-Step Integration Guide:**

**Step 1: Obtain or Create a CoreML Model (.mlmodel file)**
Before you can integrate a model, you need one. You can:
* **Download pre-trained models:** Apple provides various pre-trained models for common tasks like image classification, object detection, and natural language processing on its developer website.
* **Convert existing models:** If you have models trained in frameworks like TensorFlow, Keras, or PyTorch, you can convert them to the \`.mlmodel\` format using \`coremltools\`, a Python package provided by Apple.
* **Train with CreateML:** For simpler tasks, Apple's CreateML (integrated into Xcode) allows you to train custom models using your own data without writing any ML code.

For this tutorial, let's assume you have a \`.mlmodel\` file, for instance, an image classification model that identifies different types of fruits.

**Step 2: Create a New Xcode Project**
Open Xcode and create a new iOS App project. Choose your preferred interface (SwiftUI or UIKit) and language (Swift).

**Step 3: Add the CoreML Model to Your Project**
Drag and drop your \`.mlmodel\` file directly into your Xcode project navigator. When you do this, Xcode automatically generates a Swift class that provides a convenient interface for interacting with your model. This generated class abstracts away the complexities of the model, allowing you to use it with simple method calls.

**Step 4: Integrate the Model into Your Code (Example: Image Classification with Vision Framework)**
For tasks involving images, Apple's Vision framework works seamlessly with CoreML. Vision handles the image processing pipeline, making it easier to prepare image input for your CoreML model.

First, import the necessary frameworks in your ViewController or SwiftUI View file:
\`\`\`swift
import CoreML
import Vision
import UIKit // If using UIKit
import SwiftUI // If using SwiftUI
\`\`\`

Next, create an instance of your generated CoreML model class. For our fruit classification example, if your model is named \`FruitClassifier.mlmodel\`, Xcode will generate a class named \`FruitClassifier\`.

\`\`\`swift
// Inside your class or struct
lazy var model: VNCoreMLModel = {
    do {
        let config = MLModelConfiguration()
        let coreMLModel = try FruitClassifier(configuration: config).model
        return try VNCoreMLModel(for: coreMLModel)
    } catch {
        fatalError("Failed to load CoreML model: \\(error)")
    }
}()

lazy var requests: [VNCoreMLRequest] = {
    let request = VNCoreMLRequest(model: model) { [weak self] request, error in
        self?.processClassifications(for: request, error: error)
    }
    request.usesCPUOnly = false // Set to true to force CPU, false to use Neural Engine/GPU
    return [request]
}()
\`\`\`

Now, create a function to perform the classification on an image:
\`\`\`swift
func classifyImage(_ image: UIImage) {
    guard let ciImage = CIImage(image: image) else {
        fatalError("Unable to create CIImage from UIImage.")
    }

    let handler = VNImageRequestHandler(ciImage: ciImage, options: [:])
    do {
        try handler.perform(self.requests)
    } catch {
        print("Failed to perform classification: \\(error)")
    }
}
\`\`\`

Finally, implement the \`processClassifications\` method to handle the model's output:
\`\`\`swift
func processClassifications(for request: VNRequest, error: Error?) {
    guard let classifications = request.results as? [VNClassificationObservation] else {
        print("Failed to classify image: \\(error?.localizedDescription ?? "Unknown error")")
        return
    }

    if classifications.isEmpty {
        print("Nothing recognized.")
    } else {
        // Display the top classification
        let topClassification = classifications.first!
        print("Classification: \\(topClassification.identifier) - Confidence: \\(String(format: "%.2f", topClassification.confidence))")
        // Update your UI with the result
    }
}
\`\`\`

**Step 5: Trigger Classification (e.g., from a button or camera input)**
You would call \`classifyImage\` whenever you have an image ready for processing, for example, after a user selects a photo from their library or captures one with the camera.

**Conclusion:**

Integrating CoreML into your iOS applications opens up a world of possibilities for creating intelligent, responsive, and privacy-conscious features. While this tutorial covers the basics of image classification, CoreML supports various other model types, including those for text analysis, sound classification, and more. By leveraging Apple's optimized framework, you can empower your apps with cutting-edge machine learning capabilities, providing a truly enhanced user experience. Start experimenting with CoreML today and unlock the full potential of AI in your mobile applications!`,
        link: "https://yourblog.com/coreml-ios-app"
    },
    {
        title: "Value Investing vs. Technical Analysis for Tech Stocks",
        date: "May 05, 2025",
        excerpt: "Exploring the two major schools of thought in stock market investing and how they apply to the volatile world of tech stocks.",
        content: `In the dynamic and often exhilarating world of stock market investing, two primary schools of thought dominate the landscape: Value Investing and Technical Analysis. Both aim to achieve the same goal – identifying profitable opportunities – but they approach the market from fundamentally different perspectives. Understanding these methodologies, especially in the context of the highly volatile and innovation-driven tech sector, is crucial for any aspiring investor.

**Value Investing: The Fundamentalist's Approach**

Value investing, famously championed by legends like Benjamin Graham and Warren Buffett, is rooted in the belief that a stock's market price can deviate from its intrinsic, or true, value. A value investor's core objective is to identify companies whose stocks are trading below their intrinsic worth, essentially buying a dollar for fifty cents. This approach requires a deep dive into a company's fundamentals.

Key aspects of Value Investing include:
* **Intrinsic Value Calculation:** This involves a thorough analysis of a company's financial statements (balance sheets, income statements, cash flow statements), management quality, industry position, competitive advantages (moats), future growth prospects, and macroeconomic factors. The goal is to estimate the company's true worth, independent of short-term market fluctuations.
* **Margin of Safety:** A cornerstone of value investing, the margin of safety is the difference between a stock's intrinsic value and its current market price. Investors seek a significant margin to protect against errors in judgment or unforeseen negative events.
* **Long-Term Horizon:** Value investors typically have a long-term investment horizon, often holding stocks for years, allowing the market to eventually recognize the company's true value. They are patient and undeterred by short-term market noise.
* **Contrarian Mindset:** Often, value opportunities arise when a company is out of favor with the market due to temporary setbacks or irrational pessimism. Value investors are willing to go against the crowd if their fundamental analysis supports it.

**Applying Value Investing to Tech Stocks:**
Tech stocks can be challenging for traditional value investors due to their often-high valuations, rapid innovation cycles, and sometimes negative earnings in early growth stages. However, a value approach in tech might involve:
* **Focusing on established tech giants:** Companies with strong cash flows, dominant market positions, and consistent profitability (e.g., Apple, Microsoft).
* **Identifying undervalued niche players:** Smaller tech companies with strong intellectual property, growing user bases, or unique business models that the market might be overlooking.
* **Understanding future growth drivers:** Beyond current financials, assessing the long-term potential of emerging technologies (AI, cloud computing, biotech) and how a company is positioned to capitalize on them.

**Technical Analysis: The Chartist's Perspective**

Technical analysis, in contrast, focuses solely on past market data, primarily price and volume, to predict future price movements. Technical analysts, often called "chartists," believe that all relevant information about a stock is already reflected in its price. They study charts, patterns, and indicators to identify trends, support and resistance levels, and potential entry and exit points.

Key aspects of Technical Analysis include:
* **Price Action:** The movement of a stock's price over time, represented by candlestick charts, line charts, etc.
* **Volume:** The number of shares traded, which can confirm the strength of a price movement.
* **Patterns:** Recurring formations in price charts (e.g., head and shoulders, double tops/bottoms, triangles) that are believed to signal future price direction.
* **Indicators:** Mathematical calculations based on price and volume data (e.g., Moving Averages, Relative Strength Index (RSI), MACD) that provide insights into momentum, volatility, and overbought/oversold conditions.
* **Short-Term Focus:** Technical analysis is often favored by traders who aim to profit from short-term price fluctuations, holding positions for days, weeks, or a few months.

**Applying Technical Analysis to Tech Stocks:**
Tech stocks, with their inherent volatility and strong trending behaviors, can be fertile ground for technical analysts.
* **Identifying Trends:** Tech stocks often exhibit strong uptrends or downtrends, which technical analysts can identify and ride.
* **Momentum Trading:** Rapid price movements in tech can be capitalized on using momentum indicators.
* **Breakout/Breakdown Strategies:** Tech stocks frequently break out of consolidation patterns or break down from support levels, offering clear entry/exit signals.
* **Risk Management:** Technical analysis provides clear stop-loss levels, which are crucial in the fast-moving tech sector.

**The Hybrid Approach: Best of Both Worlds**

While purists of each philosophy exist, many successful investors and traders today employ a hybrid approach, combining elements of both value investing and technical analysis. This synergistic strategy can provide a more robust framework for decision-making.

* **Fundamental for "What to Buy":** Use fundamental analysis to identify high-quality companies with strong long-term prospects, regardless of their current market sentiment. This helps in selecting fundamentally sound tech companies.
* **Technical for "When to Buy/Sell":** Once fundamentally strong companies are identified, use technical analysis to pinpoint optimal entry and exit points. For example, a value investor might wait for a fundamentally strong tech stock to pull back to a key technical support level before initiating a position. Conversely, a technical analyst might use fundamental analysis to filter out weak companies, focusing only on those with solid underlying businesses for their trading strategies.
* **Confirmation:** Technical indicators can confirm fundamental theses. If a fundamentally strong tech company's stock starts showing bullish technical patterns, it can add conviction to an investment decision.

**Conclusion:**

Both Value Investing and Technical Analysis offer valuable lenses through which to view the stock market. Value investing provides a deep understanding of a company's intrinsic worth and long-term potential, while technical analysis offers insights into market psychology and precise timing. In the fast-paced and innovative tech sector, a blended approach often proves to be the most effective strategy. By combining the rigorous research of fundamental analysis with the tactical timing of technical analysis, investors can navigate the complexities of tech stocks with greater confidence, aiming for both long-term growth and opportunistic gains. The key lies in understanding your own investment goals, risk tolerance, and continuously adapting your strategy to the ever-evolving market dynamics.`,
        link: "https://yourblog.com/investing-tech-stocks"
    }
];

const testimonials = [
    { name: 'Dr. Anya Sharma', role: 'Chief Medical Officer, HealthTech Innovations', quote: 'Pratik\'s MediScan AI is a game-changer for healthcare. His ability to integrate complex AI models into a user-friendly iOS app is truly remarkable. This app has the potential to revolutionize how people manage their medication safely and effectively.', avatar: 'https://placehold.co/100x100/e2e8f0/334155?text=AS' },
    { name: 'Sarah Chen', role: 'Lead Product Manager, FinTech Solutions', quote: 'Working with Pratik on FinWise was an exceptional experience. His deep understanding of financial data and AI-driven insights transformed our expense tracking. The app\'s personalized suggestions for cost-cutting are incredibly accurate and have genuinely helped users achieve their financial goals.', avatar: 'https://placehold.co/100x100/e2e8f0/334155?text=SC' },
    { name: 'David Lee', role: 'Senior Software Engineer, Apple Ecosystem', quote: 'The QuickTranslate macOS tool developed by Pratik is a testament to his keen eye for practical utility and seamless integration. Its instant translation capability and intuitive keyboard shortcuts are exactly what busy professionals need to boost productivity. A truly well-crafted macOS application.', avatar: 'https://placehold.co/100x100/e2e8f0/334155?text=DL' },
];

// Pratik's author details for blog posts and project pages
const authorDetails = {
    name: "Pratik Singh",
    designation: "iOS Developer & Aspiring AI Engineer",
    profileImage: "/profile.png" // Assuming you have a profile.png in your public folder
};


// THEME TOGGLE COMPONENT
const ThemeToggle = ({ theme, toggleTheme }) => (
    <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:focus:ring-offset-slate-900 transition-colors duration-300">
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
);

// HEADER / NAVIGATION COMPONENT
const Header = ({ theme, toggleTheme, onNavigate, onOpenCallModal }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [ { href: '#about', label: 'About' }, { href: '#experience', label: 'Experience' }, { href: '#projects', label: 'Projects' }, { href: '#blog', label: 'Blog' }, { href: '#contact', label: 'Contact' }];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={() => onNavigate('home')} className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
                    Pratik.
                </a>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={() => onNavigate('home')} className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 font-medium">
                            {link.label}
                        </a>
                    ))}
                    <button onClick={onOpenCallModal} className="px-4 py-2 border border-teal-500 text-teal-500 rounded-md font-semibold hover:bg-teal-500 hover:text-white transition-colors duration-300">
                        Book a Call
                    </button>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <div className="md:hidden flex items-center">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <button onClick={() => setIsOpen(!isOpen)} className="ml-4 text-slate-800 dark:text-white" aria-label="Open menu">
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-slate-900`}>
                <div className="px-6 pt-2 pb-4 space-y-2 flex flex-col items-center">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={() => { setIsOpen(false); onNavigate('home'); }} className="block text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 py-2">
                            {link.label}
                        </a>
                    ))}
                   <button onClick={() => { setIsOpen(false); onOpenCallModal(); }} className="mt-2 w-full text-center px-4 py-2 bg-teal-500 text-white rounded-md font-semibold">
                        Book a Call
                    </button>
                </div>
            </div>
        </header>
    );
};

// HERO SECTION COMPONENT
const HeroSection = () => (
    <section id="home" className="min-h-screen flex items-center bg-stone-50 dark:bg-slate-900 overflow-hidden pt-24 md:pt-0">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-white leading-tight mb-4">
                        Hey There, <br/> I'm Pratik Singh
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto md:mx-0">
                        An <span className="font-semibold text-teal-500">iOS Developer & Aspiring AI Engineer</span> building impactful mobile experiences.
                        With a deep curiosity for <span className="font-semibold text-teal-500">Artificial Intelligence</span> and experience as a <span className="font-semibold text-teal-500">Stock Market Investor</span>, I'm on a mission to merge technology, business acumen, and design to create AI-powered products that simplify lives and solve meaningful problems.
                        Based in Varanasi, India.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-teal-500">3+</p>
                            <p className="text-sm text-slate-500">Years Experience</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-teal-500">10+</p>
                            <p className="text-sm text-slate-500">Projects Completed</p>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center items-center h-[26rem] md:h-[32rem]">
                    <BrushStrokeIcon />
                    <img 
                        src="/profile.png" 
                        alt="Pratik Singh" 
                        className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full object-cover shadow-2xl border-8 border-white dark:border-slate-800"
                    />
                </div>
            </div>
        </div>
    </section>
);

// SERVICES SECTION
const ServicesSection = () => (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">What I do</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">I build and invest in technology that solves real problems.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map(service => (
                    <div key={service.title} className="bg-stone-50 dark:bg-slate-800/50 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// EXPERIENCE SECTION
const ExperienceSection = () => (
    <section id="experience" className="py-20 bg-stone-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">My Work Experience</h2>
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                {experiences.map((exp, index) => (
                    <div key={exp.role} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="order-1 w-5/12"></div>
                        <div className="z-10 flex items-center order-1 bg-teal-500 shadow-xl w-8 h-8 rounded-full">
                            {/* Numbering now correctly reflects the order from oldest (1) to newest (N) */}
                            <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                        </div>
                        <div className="order-1 bg-white dark:bg-slate-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <p className="text-xs text-slate-500 dark:text-slate-400">{exp.period}</p>
                            <h3 className="mb-1 font-bold text-lg text-slate-800 dark:text-white">{exp.role}</h3>
                            <h4 className="mb-3 font-semibold text-sm text-teal-600 dark:text-teal-400">{exp.company}</h4>
                            <p className="text-sm leading-snug tracking-wide text-slate-600 dark:text-slate-300 text-opacity-100">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// PROJECTS SECTION
const ProjectsSection = ({ onSelectProject }) => (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">My Latest Works</h2>
            {/* Flex container for horizontal scrolling */}
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 space-x-6 justify-center"> {/* Added justify-center */}
                {projects.map((project) => (
                    <div key={project.title} className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center bg-stone-50 dark:bg-slate-800/50 rounded-lg shadow-lg overflow-hidden group">
                        <div className="overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }}/>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{project.description.substring(0, 100)}...</p> {/* Show truncated description */}
                            <button onClick={() => onSelectProject(project)} className="font-semibold text-teal-600 dark:text-teal-400 hover:underline focus:outline-none">View Project &rarr;</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// PROJECT DETAIL PAGE COMPONENT
const ProjectDetailPage = ({ project, onBack, onSelectProject }) => {
    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-slate-900 pt-24">
                <p className="text-slate-600 dark:text-slate-300">Project not found.</p>
                <button onClick={onBack} className="ml-4 px-4 py-2 bg-teal-500 text-white rounded-md font-semibold hover:bg-teal-600 transition-colors">
                    Back
                </button>
            </div>
        );
    }

    // Filter out the current project for recommendations
    const recommendedProjects = projects.filter(p => p.title !== project.title).slice(0, 2); // Get up to 2 recommendations

    return (
        <section className="min-h-screen bg-stone-50 dark:bg-slate-900 py-20 pt-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <button onClick={onBack} className="mb-8 flex items-center text-teal-600 dark:text-teal-400 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back
                </button>

                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">{project.title}</h1>
                    
                    {/* Author Details - Added for consistency with BlogDetailPage */}
                    <div className="flex items-center mb-8 p-4 bg-stone-100 dark:bg-slate-700 rounded-lg">
                        <img src={authorDetails.profileImage} alt={authorDetails.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-teal-500" />
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white text-lg">{authorDetails.name}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">{authorDetails.designation}</p>
                        </div>
                    </div>

                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-80 object-cover mb-6 rounded-lg"
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x450/cccccc/ffffff?text=Image+Error'; }}
                    />
                    <p className="text-slate-600 dark:text-slate-300 text-lg mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Technologies Used:</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-teal-100 dark:bg-teal-700 text-teal-800 dark:text-teal-100 rounded-full text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-md font-semibold hover:bg-teal-600 transition-colors shadow-md">
                        View on GitHub
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>

                {/* Other Project Recommendations - Added for consistency with BlogDetailPage */}
                {recommendedProjects.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">More Projects</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {recommendedProjects.map(recProject => (
                                <div key={recProject.title} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 cursor-pointer" onClick={() => onSelectProject(recProject)}>
                                    <img 
                                        src={recProject.imageUrl} 
                                        alt={recProject.title} 
                                        className="w-full h-40 object-cover mb-4 rounded-lg"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }}
                                    />
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 hover:text-teal-500 transition-colors">{recProject.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{recProject.description.substring(0, 100)}...</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

// BlogSection needs to be updated to handle clicks and pass data for detail page
const BlogSection = ({ onSelectBlog }) => (
    <section id="blog" className="py-20 bg-stone-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">From My Blog</h2>
            {/* Flex container for horizontal scrolling */}
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 space-x-6 justify-center"> {/* Added justify-center */}
                {blogPosts.map((post) => (
                    <div key={post.title} className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer" onClick={() => onSelectBlog(post)}>
                        <div className="p-6">
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{post.date}</p>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-teal-500 transition-colors">{post.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{post.excerpt}</p>
                            {/* Removed <a> tag here, as the whole div is clickable now */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// NEW BlogDetailPage COMPONENT
const BlogDetailPage = ({ blog, onBack, onSelectBlog }) => {
    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-slate-900 pt-24">
                <p className="text-slate-600 dark:text-slate-300">Blog post not found.</p>
                <button onClick={onBack} className="ml-4 px-4 py-2 bg-teal-500 text-white rounded-md font-semibold hover:bg-teal-600 transition-colors">
                    Back
                </button>
            </div>
        );
    }

    // Filter out the current blog post for recommendations
    const recommendedBlogs = blogPosts.filter(p => p.title !== blog.title).slice(0, 2); // Get up to 2 recommendations

    return (
        <section className="min-h-screen bg-stone-50 dark:bg-slate-900 py-20 pt-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <button onClick={onBack} className="mb-8 flex items-center text-teal-600 dark:text-teal-400 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back
                </button>

                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">{blog.title}</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Published on {blog.date}</p>
                    
                    {/* Author Details */}
                    <div className="flex items-center mb-8 p-4 bg-stone-100 dark:bg-slate-700 rounded-lg">
                        <img src={authorDetails.profileImage} alt={authorDetails.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-teal-500" />
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white text-lg">{authorDetails.name}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">{authorDetails.designation}</p>
                        </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line mb-8">{blog.content}</p>
                    
                    {/* Optional: Link to original blog post if it exists externally */}
                    {blog.link && (
                        <a href={blog.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-md font-semibold hover:bg-teal-600 transition-colors shadow-md">
                            Read Original Post
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                </div>

                {/* Other Blog Recommendations */}
                {recommendedBlogs.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">More from the Blog</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {recommendedBlogs.map(recBlog => (
                                <div key={recBlog.title} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 cursor-pointer" onClick={() => onSelectBlog(recBlog)}>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{recBlog.date}</p>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 hover:text-teal-500 transition-colors">{recBlog.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{recBlog.excerpt}</p>
                                    {/* No explicit "Read More" link here, the whole div is clickable */}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

// TESTIMONIALS SECTION
const TestimonialsSection = () => (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">What Clients & Colleagues Say</h2>
            {/* Flex container for horizontal scrolling */}
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 space-x-6 justify-center"> {/* Added justify-center here */}
                {testimonials.map(t => (
                    <div key={t.name} className="flex-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 snap-center bg-stone-50 dark:bg-slate-800/50 p-8 rounded-lg shadow-lg flex flex-col justify-between">
                        <p className="text-slate-600 dark:text-slate-300 mb-6 italic flex-grow">"{t.quote}"</p>
                        <div className="flex items-center mt-4">
                            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4"/>
                            <div>
                                <h4 className="font-bold text-slate-800 dark:text-white">{t.name}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ContactModal Component for "Book a Call"
const ContactModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(''); // 'idle', 'loading', 'success', 'error'

    // Replace with your Google Apps Script Web App URL
    // Instructions to get this URL are provided below the code block.
    const GOOGLE_SHEET_WEB_APP_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch(GOOGLE_SHEET_WEB_APP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    name: name,
                    email: email,
                    message: message,
                }).toString(),
            });

            if (response.ok) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
                // Optionally close modal after a short delay
                setTimeout(onClose, 2000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl w-full max-w-md p-6 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-600 dark:text-slate-300 hover:text-teal-500">
                    <CloseIcon />
                </button>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">Book a Call with Pratik</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-teal-500 focus:border-teal-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-teal-500 focus:border-teal-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-teal-500 focus:border-teal-500"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-teal-500 text-white rounded-md font-semibold hover:bg-teal-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Submitting...' : 'Submit'}
                    </button>
                    {status === 'success' && <p className="text-green-500 text-center mt-2">Message sent successfully!</p>}
                    {status === 'error' && <p className="text-red-500 text-center mt-2">Failed to send message. Please try again.</p>}
                </form>
            </div>
        </div>
    );
};


// CONTACT & FOOTER SECTION
const ContactFooter = ({ onNavigate }) => (
    <footer id="contact" className="bg-slate-800 dark:bg-black text-white">
        <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Make Something Amazing Together</h2>
            <p className="text-slate-300 mb-8">Start by <a href="https://www.instagram.com/sym6ol_/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline font-semibold">saying hi</a></p>
            <div className="flex justify-center space-x-6 mb-12">
                <a href="https://www.linkedin.com/in/pratik2001/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg></a>
                <a href="https://github.com/Pratik-Singh-web" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/></svg></a>
                <a href="https://www.instagram.com/sym6ol_/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.415 2.175 8.796 2.163 12 2.163zm0 1.441c-3.117 0-3.483.011-4.71.069-2.76.126-3.955 1.31-4.082 4.082-.057 1.227-.068 1.592-.068 4.71s.011 3.483.068 4.71c.127 2.772 1.322 3.955 4.082 4.082 1.227.057 1.592.068 4.71.068s3.483-.011 4.71-.068c2.76-.126 3.955-1.31 4.082-4.082.057-1.227.068-1.592.068-4.71s-.011-3.483-.068-4.71c-.127-2.772-1.322-3.955-4.082-4.082-1.227-.057-1.592-.069-4.71-.069zm0 5.838a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.38a2.88 2.88 0 110-5.76 2.88 2.88 0 010 5.76zM17.802 6.116a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd"/></svg></a>
            </div>
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Pratik Singh. Made with ❤️ in Greater Noida, India.</p>
        </div>
    </footer>
);

// MAIN APP COMPONENT
export default function App() {
    const [theme, setTheme] = useState('light');
    // State to manage the current page view: 'home', 'projectDetail', or 'blogDetail'
    const [currentPage, setCurrentPage] = useState('home');
    // State to store the currently selected project or blog for detail view
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedBlog, setSelectedBlog] = useState(null);
    // State for contact modal visibility
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Effect to handle theme changes
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    // Function to toggle between light and dark themes
    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    // Function to navigate to a specific project detail page
    const navigateToProjectDetail = (project) => {
        setSelectedProject(project);
        setCurrentPage('projectDetail');
        setSelectedBlog(null); // Clear selected blog when navigating to project
        window.scrollTo(0, 0); // Scroll to top when navigating to new page
    };

    // Function to navigate to a specific blog detail page
    const navigateToBlogDetail = (blog) => {
        setSelectedBlog(blog);
        setCurrentPage('blogDetail');
        setSelectedProject(null); // Clear selected project when navigating to blog
        window.scrollTo(0, 0); // Scroll to top when navigating to new page
    };

    // Function to navigate back to the home page (projects/blogs list)
    const navigateToHome = () => {
        setCurrentPage('home');
        setSelectedProject(null);
        setSelectedBlog(null);
        window.scrollTo(0, 0); // Scroll to top when navigating back
    };

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);


    return (
        <div className={`bg-white dark:bg-slate-900 font-sans leading-normal tracking-tight transition-colors duration-500`}>
            {/* Header is always visible */}
            <Header theme={theme} toggleTheme={toggleTheme} onNavigate={navigateToHome} onOpenCallModal={openContactModal} />

            {/* Conditional rendering of main content based on currentPage */}
            <main>
                {currentPage === 'home' ? (
                    <>
                        <HeroSection />
                        <ServicesSection />
                        <ExperienceSection />
                        {/* Pass the navigation function to ProjectsSection */}
                        <ProjectsSection onSelectProject={navigateToProjectDetail} />
                        {/* Pass the navigation function to BlogSection */}
                        <BlogSection onSelectBlog={navigateToBlogDetail} />
                        <TestimonialsSection />
                    </>
                ) : currentPage === 'projectDetail' ? (
                    // Render ProjectDetailPage when a project is selected
                    <ProjectDetailPage project={selectedProject} onBack={navigateToHome} onSelectProject={navigateToProjectDetail} />
                ) : (
                    // Render BlogDetailPage when a blog is selected
                    <BlogDetailPage blog={selectedBlog} onBack={navigateToHome} onSelectBlog={navigateToBlogDetail} />
                )}
            </main>

            {/* Footer is always visible */}
            <ContactFooter onNavigate={navigateToHome} />

            {/* Contact Modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        </div>
    );
}
