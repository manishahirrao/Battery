"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InquiryModal } from "@/components/inquiry-modal"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RefundPolicyPage() {
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
              Refund Policy
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
                <h2 className="text-2xl font-bold mb-4">Refund Policy Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Shri Guru Traders, we strive to provide high-quality batteries and excellent service. This Refund Policy outlines the conditions under which refunds are provided for our products and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Eligibility for Refunds</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Product Refunds</h3>
                    <p className="text-muted-foreground mb-2">
                      Refunds are available under the following conditions:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Wrong product delivered (verified within 24 hours)</li>
                      <li>Defective product on arrival (reported within 48 hours)</li>
                      <li>Product damaged during delivery (documented with photos)</li>
                      <li>Manufacturing defect covered under warranty</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Service Refunds</h3>
                    <p className="text-muted-foreground mb-2">
                      Service refunds are available for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Installation not performed as agreed</li>
                      <li>Service cancellation before work begins</li>
                      <li>Unsatisfactory service (reported within 7 days)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Non-Refundable Items</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Products installed and used for more than 7 days</li>
                  <li>Products damaged due to improper use or maintenance</li>
                  <li>Custom orders or special procurement items</li>
                  <li>Installation charges for completed work</li>
                  <li>Delivery charges for completed deliveries</li>
                  <li>Products with physical damage after delivery</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Step 1: Contact Us</h3>
                    <p className="text-muted-foreground">
                      Call or email us within the specified timeframe with your order details and reason for refund request.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Step 2: Verification</h3>
                    <p className="text-muted-foreground">
                      Our team will verify your claim and may request additional information or product inspection.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Step 3: Approval</h3>
                    <p className="text-muted-foreground">
                      Once approved, we will process your refund within 5-7 business days.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Step 4: Refund Method</h3>
                    <p className="text-muted-foreground">
                      Refunds will be processed using the original payment method or as mutually agreed.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Refund Timeframes</h2>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Product Issues:</span>
                      <span>Within 48 hours of delivery</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Service Issues:</span>
                      <span>Within 7 days of service</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Processing Time:</span>
                      <span>5-7 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Bank Processing:</span>
                      <span>3-5 business days</span>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Refund Amount</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full Refund</h3>
                    <p className="text-muted-foreground">
                      Full refund is provided for wrong product delivery, manufacturing defects, or service failures.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Partial Refund</h3>
                    <p className="text-muted-foreground">
                      Partial refunds may be offered for minor issues or when the product can be repaired or replaced.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Deductions</h3>
                    <p className="text-muted-foreground">
                      Refunds may be subject to deductions for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Return shipping costs (if applicable)</li>
                      <li>Restocking fees (10-20% for certain products)</li>
                      <li>Usage depreciation (for used products)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Exchange Policy</h2>
                <p className="text-muted-foreground mb-4">
                  Instead of refunds, we offer exchanges under the following conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Product exchange within 7 days of delivery</li>
                  <li>Exchange for higher or lower value products (price difference applies)</li>
                  <li>Exchange for different specifications or models</li>
                  <li>Exchange subject to product availability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Warranty Claims</h2>
                <p className="text-muted-foreground mb-4">
                  Warranty claims are handled separately from refunds:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Manufacturer warranty applies as per product specifications</li>
                  <li>Warranty claims may result in repair or replacement</li>
                  <li>Warranty period starts from date of purchase</li>
                  <li>Proof of purchase required for all warranty claims</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Required Documentation</h2>
                <p className="text-muted-foreground mb-4">
                  For refund processing, please provide:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Original purchase receipt or invoice</li>
                  <li>Product packaging and accessories (if applicable)</li>
                  <li>Photos or videos showing the issue</li>
                  <li>Order confirmation and delivery details</li>
                  <li>ID proof for verification</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Exceptions</h2>
                <p className="text-muted-foreground">
                  We reserve the right to deny refund requests in cases of:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Fraudulent claims or misrepresentation</li>
                  <li>Products tampered with or modified</li>
                  <li>Requests made after the specified timeframes</li>
                  <li>Non-compliance with warranty terms</li>
                  <li>Force majeure circumstances</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  For refund requests and inquiries, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="font-medium">Shri Guru Traders</p>
                  <p>Email: shrigurutraders001@gmail.com</p>
                  <p>Phone: +91 7974146200</p>
                  <p>Address: Ahmedpur Kalam, Hoshangabad Road Bag Swaniya, Misrod, Bhopal - 462026 (Near By Johan Majeed)</p>
                  <p className="mt-2 text-sm">Please include "Refund Request" in your email subject</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
                <p className="text-muted-foreground">
                  This Refund Policy may be updated periodically. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of the updated policy.
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
