
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-[#091f40] text-white p-6 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <Image
            src="/flagler-lending-logo.png"
            alt="Flagler Lending"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-bold">Flagler Lending</h1>
        </div>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Flexible Working Capital for Small Business Owners
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Flagler Lending provides fast and reliable business funding when banks say no. No delays, no nonsense — just real financing.
        </p>
        <Button size="lg" className="bg-[#091f40] text-white">
          Apply Now
        </Button>
      </section>

      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Who We Are</h3>
        <p>
          Based in Surfside, Florida, Flagler Lending specializes in helping small businesses access working capital through fast, flexible funding options. We work with businesses across industries and credit types to deliver financing that fits your goals.
        </p>
      </section>

      <section id="services" className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-2">Revenue-Based Advances</h4>
                <p>
                  Flexible funding based on your future receivables. Ideal for businesses with steady sales.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-2">Working Capital Loans</h4>
                <p>
                  Short-term funding for payroll, inventory, equipment, or emergency costs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-2">Bridge Funding</h4>
                <p>
                  Quick financing solutions to bridge cash flow gaps between pay cycles or receivables.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-[#091f40] text-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">Contact Flagler Lending</h3>
          <div className="flex flex-col gap-4 items-center">
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> info@flaglerlending.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> (888) 123-4567
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 text-sm bg-white text-gray-500 border-t">
        © {new Date().getFullYear()} Flagler Lending. All rights reserved.
      </footer>
    </main>
  );
}
