"use client"

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Zap, Gift, ArrowRight, Phone } from "lucide-react"

interface WelcomePopupProps {
  isOpen: boolean
  onClose: () => void
  onInquiryClick: () => void
}

export function WelcomePopup({ isOpen, onClose, onInquiryClick }: WelcomePopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0" style={{ zIndex: 9999 }}>
        <DialogTitle className="sr-only">Welcome to Shri Guru Traders</DialogTitle>
        <DialogDescription className="sr-only">
          Special offer on premium batteries with free delivery and best value guarantee
        </DialogDescription>
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-primary-foreground/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4 mb-3">
            <img 
              src="/logo.png" 
              alt="Shri Guru Traders Logo"
              className="w-36 h-16 rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold">Welcome to</h2>
              <p className="text-2xl font-bold">Shri Guru Traders</p>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-sm">Your Trusted Power Partner</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Premium Batteries for All Vehicles
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Free Doorstep Delivery
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Best Value Guarantee
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <Button
              onClick={onInquiryClick}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5"
            >
              Get Free Quote Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" onClick={onClose} className="w-full py-5 bg-transparent">
              <Phone className="mr-2 w-4 h-4" />
              Call: +91 98765 43210
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground pt-2">No spam, we respect your privacy</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
