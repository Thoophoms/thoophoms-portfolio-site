import Link from 'next/link';
import { Boxes, Sparkles, GraduationCap, Mail } from 'lucide-react';
// import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="text-center py-20">


      <h1 className="text-5xl font-bold mb-2">
        Software Engineer
      </h1>
      <h2 className="text-4xl font-bold mb-5">
        Specializing in AI & Machine Learning
      </h2>
      <p className="text-lg mb-5 text-gray-400">
        Demonstrated expertise in building and implementing complex models with Python, PyTorch, and TensorFlow. <br />
        Successfully reproduced Meta AI&apos;s Toolformer, showcasing advanced capabilities in Large Language Models (LLMs)
        <br />and AI agent frameworks. Combines a deep understanding of AI with a strong background in full-stack development
        <br />to build and deploy end-to-end intelligent applications.
      </p>

      {/* Nav */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <Link href="/projects" className="inline-flex items-center gap-2 bg-gray-100 rounded-3xl border border-neutral-200 px-5 py-4 text-sm font-medium hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
          <Boxes className="h-5 w-5" /> Projects
        </Link>
        <Link href="/skills" className="inline-flex items-center gap-2 bg-gray-100 rounded-3xl border border-neutral-200 px-5 py-4 text-sm font-medium hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
          <Sparkles className="h-5 w-5" /> Skills
        </Link>
        <a
          href="/Resume-Thoop-hom-Supannopaj-Software-Developer.pdf"
          className="inline-flex items-center gap-2 bg-gray-100 rounded-3xl border border-neutral-200 px-5 py-4 text-sm font-medium hover:bg-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GraduationCap className="h-5 w-5" /> Resume
        </a>
        <Link href="mailto:thoophom.su@gmail.com" className="inline-flex items-center gap-2 bg-gray-100 rounded-3xl border border-neutral-200 px-5 py-4 text-sm font-medium hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
          <Mail className="h-5 w-5" /> Contact
        </Link>
      </div>

    </section>
  );
};

export default Hero;