"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function TermsConditionsPage() {
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
              Terms & Conditions
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
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Shri Guru Traders website and services, you accept and agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Products and Services</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Battery Products</h3>
                    <p className="text-muted-foreground">
                      We offer a wide range of automotive, inverter, solar, two-wheeler, truck & bus, and e-rickshaw batteries from leading manufacturers. All products are genuine and come with manufacturer warranties.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Installation Services</h3>
                    <p className="text-muted-foreground">
                      We provide professional installation services for all battery types. Our technicians are trained and certified to ensure proper installation and safety.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Delivery</h3>
                    <p className="text-muted-foreground">
                      We offer free delivery within our service areas. Delivery times may vary based on location and product availability.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Ordering and Payment</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All prices are subject to change without prior notice</li>
                  <li>Payment must be made in full before product delivery</li>
                  <li>We accept cash, UPI, bank transfers, and digital payments</li>
                  <li>Orders are confirmed only after payment verification</li>
                  <li>We reserve the right to refuse or cancel any order</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Warranty and Guarantee</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Manufacturer Warranty</h3>
                    <p className="text-muted-foreground">
                      All batteries come with manufacturer warranty as specified. Warranty claims will be processed according to manufacturer terms and conditions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Service Guarantee</h3>
                    <p className="text-muted-foreground">
                      We guarantee professional installation and service quality. If you're not satisfied with our service, please contact us within 7 days for resolution.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Customer Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate information for orders and delivery</li>
                  <li>Ensure proper access for installation and delivery</li>
                  <li>Follow battery usage and maintenance guidelines</li>
                  <li>Report any issues promptly for warranty claims</li>
                  <li>Maintain proper documentation for warranty purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Shri Guru Traders shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Damage due to improper use or maintenance</li>
                  <li>Acts of nature or external factors beyond our control</li>
                  <li>Consequential or indirect damages</li>
                  <li>Loss of business or revenue</li>
                  <li>Issues covered by manufacturer warranty</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Cancellation and Refunds</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Order Cancellation</h3>
                    <p className="text-muted-foreground">
                      Orders can be cancelled before delivery. A cancellation fee may apply for processed orders.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Refund Policy</h3>
                    <p className="text-muted-foreground">
                      Refunds are provided according to our Refund Policy. Please review the policy for detailed terms and conditions.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on this website, including logos, images, text, and design, is the property of Shri Guru Traders and is protected by intellectual property laws. Unauthorized use is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Privacy</h2>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
                <p className="text-muted-foreground mb-4">
                  Any disputes arising from these terms shall be resolved through:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Direct negotiation between parties</li>
                  <li>Mediation by a neutral third party</li>
                  <li>Legal proceedings in the appropriate jurisdiction</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms & Conditions, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="font-medium">Shri Guru Traders</p>
                  <p>Email: info@shrigurutraders.com</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Address: 123 Battery Market, Main Road, City - 123456</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Terms Modification</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of modified terms.
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
