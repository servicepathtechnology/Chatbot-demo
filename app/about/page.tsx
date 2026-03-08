import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Target, Heart, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const values = [
    { title: "Innovation", icon: <Lightbulb className="w-8 h-8 text-primary-500" />, desc: "Always pushing boundaries." },
    { title: "Impact", icon: <Target className="w-8 h-8 text-primary-500" />, desc: "Focusing on bottom-line results." },
    { title: "Integrity", icon: <Heart className="w-8 h-8 text-primary-500" />, desc: "Honest, transparent partnerships." },
  ];

  return (
    <>
      <Section background="gray" className="pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering businesses with intelligent automation.
        </p>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Founded with a vision to democratize enterprise-grade technology, Service Path Technology bridges the gap between complex AI systems and practical business applications. 
            We believe that every business, regardless of size, deserves access to the tools that drive modern growth.
          </p>
          <p className="text-lg text-gray-600 mb-16 leading-relaxed">
            Our team of engineers and strategists work closely with clients to understand their unique bottlenecks, architecting custom solutions that eliminate friction and unlock new revenue streams.
          </p>

          <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((v, i) => (
              <Card key={i} className="text-center rounded-2xl">
                <div className="bg-primary-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="bg-gray-200 aspect-square rounded-2xl mb-4 flex items-center justify-center text-gray-400">
                  <span className="text-sm">Team Member Coming Soon</span>
                </div>
                <h4 className="font-bold text-lg">Executive Name</h4>
                <p className="text-primary-600 text-sm">Role Title</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
