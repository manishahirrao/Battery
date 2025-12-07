"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PrivacyPolicyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string>("")

  const openModal = (product?: string) => {
    setSelectedProduct(product || "")
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Header onInquiryClick={() => openModal()} />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 3, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Shri Guru Traders, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our battery services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                    <p className="text-muted-foreground">
                      We may collect personal information such as your name, phone number, email address, and physical address when you contact us for battery inquiries, installation services, or make a purchase.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technical Information</h3>
                    <p className="text-muted-foreground">
                      We automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, and browsing behavior.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business Information</h3>
                    <p className="text-muted-foreground">
                      For commercial clients, we may collect business-related information including company name, GST number, and business address for billing and service purposes.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To provide battery products and installation services</li>
                  <li>To process orders and manage customer relationships</li>
                  <li>To communicate with you about orders, appointments, and service updates</li>
                  <li>To provide customer support and respond to inquiries</li>
                  <li>To send promotional offers and updates (with your consent)</li>
                  <li>To improve our products, services, and website functionality</li>
                  <li>To comply with legal obligations and protect against fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>With service providers who assist in our operations (payment processors, delivery partners)</li>
                  <li>With battery manufacturers for warranty claims and product support</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure servers, and regular security audits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings. Disabling cookies may affect some features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>File a complaint with data protection authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="font-medium">Shri Guru Traders</p>
                  <p>Email: shrigurutraders001@gmail.com</p>
                  <p>Phone: +91 7974146200</p>
                  <p>Address: Ahmedpur Kalam, Hoshangabad Road Bag Swaniya, Misrod, Bhopal - 462026 (Near By Johan Majeed)</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedProduct={selectedProduct} />
    </main>
  )
}
