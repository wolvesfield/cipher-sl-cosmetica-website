import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'
import { CheckCircle, Shield, Medal, Leaf, Lock, Globe } from '@phosphor-icons/react'

interface Certification {
  id: string
  name: string
  icon: React.ReactNode
  shortDescription: string
  fullDescription: string
  certificationBody: string
  certificationNumber?: string
  validUntil?: string
  benefits: string[]
  verificationLink?: string
}

const certifications: Record<string, Certification> = {
  'fda-registered': {
    id: 'fda-registered',
    name: 'FDA Registered Facility',
    icon: <Shield className="w-12 h-12 text-teal-deep" />,
    shortDescription: 'FDA Registered',
    fullDescription: 'Our manufacturing facility is registered with the U.S. Food and Drug Administration (FDA), ensuring compliance with federal regulations for cosmetic production.',
    certificationBody: 'U.S. Food and Drug Administration',
    certificationNumber: 'FDA-REG-2024-MTRX-001',
    validUntil: 'December 2025',
    benefits: [
      'Regular facility inspections by FDA officials',
      'Compliance with Current Good Manufacturing Practices (cGMP)',
      'Rigorous quality control and safety protocols',
      'Full ingredient disclosure and transparency',
      'Adherence to federal cosmetic regulations'
    ],
    verificationLink: 'https://www.fda.gov/cosmetics'
  },
  'gmp-certified': {
    id: 'gmp-certified',
    name: 'GMP Certified Manufacturing',
    icon: <CheckCircle className="w-12 h-12 text-teal-deep" />,
    shortDescription: 'GMP Certified',
    fullDescription: 'Good Manufacturing Practices (GMP) certification guarantees that our products are consistently produced and controlled according to the highest quality standards.',
    certificationBody: 'International Organization for Standardization (ISO)',
    certificationNumber: 'ISO 22716:2007',
    validUntil: 'March 2026',
    benefits: [
      'Strict hygiene and sanitation protocols',
      'Comprehensive staff training programs',
      'Regular equipment calibration and maintenance',
      'Detailed batch documentation and traceability',
      'Quality assurance at every production stage'
    ],
    verificationLink: 'https://www.iso.org/standard/36437.html'
  },
  'dermatologist-approved': {
    id: 'dermatologist-approved',
    name: 'Dermatologist Tested & Approved',
    icon: <Medal className="w-12 h-12 text-teal-deep" />,
    shortDescription: 'Dermatologist Approved',
    fullDescription: 'All our formulations undergo rigorous testing and evaluation by board-certified dermatologists to ensure safety and efficacy for various skin types.',
    certificationBody: 'Board-Certified Dermatology Panel',
    benefits: [
      'Clinical testing on diverse skin types and tones',
      'Safety assessment by medical professionals',
      'Hypoallergenic formulation verification',
      'Patch testing for potential irritants',
      'Ongoing dermatological consultation and review'
    ]
  },
  'cruelty-free': {
    id: 'cruelty-free',
    name: 'Certified Cruelty-Free',
    icon: <Leaf className="w-12 h-12 text-teal-deep" />,
    shortDescription: 'Cruelty Free',
    fullDescription: 'We are committed to ethical practices and never test our products or ingredients on animals at any stage of product development.',
    certificationBody: 'Leaping Bunny Program',
    certificationNumber: 'LB-2024-MTRX',
    validUntil: 'Ongoing',
    benefits: [
      'Zero animal testing throughout supply chain',
      'Third-party audited supplier agreements',
      'Alternative testing methods using advanced technology',
      'Annual compliance monitoring and verification',
      'Support for development of cruelty-free testing methods'
    ],
    verificationLink: 'https://www.leapingbunny.org'
  },
  'eco-friendly': {
    id: 'eco-friendly',
    name: 'Eco-Friendly & Sustainable',
    icon: <Globe className="w-12 h-12 text-teal-deep" />,
    shortDescription: 'Eco-Friendly',
    fullDescription: 'Our commitment to environmental sustainability includes eco-friendly packaging, responsible sourcing, and carbon-neutral shipping options.',
    certificationBody: 'Environmental Working Group (EWG)',
    benefits: [
      'Recyclable and biodegradable packaging materials',
      'Sustainable ingredient sourcing practices',
      'Carbon offset program for all shipments',
      'Water conservation in manufacturing processes',
      'Partnership with environmental protection organizations'
    ],
    verificationLink: 'https://www.ewg.org'
  },
  'secure-payment': {
    id: 'secure-payment',
    name: 'Secure Payment Processing',
    icon: <Lock className="w-12 h-12 text-teal-deep" />,
    shortDescription: 'Secure Payment',
    fullDescription: 'We utilize industry-leading encryption and security protocols to protect your personal and payment information during every transaction.',
    certificationBody: 'PCI Security Standards Council',
    certificationNumber: 'PCI DSS Level 1',
    validUntil: 'Ongoing',
    benefits: [
      'End-to-end encryption for all transactions',
      'PCI DSS Level 1 compliance (highest standard)',
      'Regular security audits and penetration testing',
      'Secure tokenization of payment information',
      'Fraud detection and prevention systems',
      '24/7 security monitoring and threat detection'
    ],
    verificationLink: 'https://www.pcisecuritystandards.org'
  }
}

interface CertificationModalProps {
  certificationId: string | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CertificationModal({ certificationId, open, onOpenChange }: CertificationModalProps) {
  if (!certificationId) return null
  
  const certification = certifications[certificationId]
  if (!certification) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-gradient-to-br from-teal-light/20 to-primary/10 p-4 rounded-xl">
              {certification.icon}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{certification.name}</DialogTitle>
              <DialogDescription className="text-base text-slate-dark/70">
                {certification.fullDescription}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div className="bg-gradient-to-br from-sand-light/50 to-background border border-border rounded-xl p-6">
            <h3 className="font-semibold text-slate-dark mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Certification Details
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-muted-foreground mb-1">Certifying Body</dt>
                <dd className="font-medium text-slate-dark">{certification.certificationBody}</dd>
              </div>
              {certification.certificationNumber && (
                <div>
                  <dt className="text-muted-foreground mb-1">Certification Number</dt>
                  <dd className="font-mono text-xs font-medium text-slate-dark bg-white/60 px-2 py-1 rounded">
                    {certification.certificationNumber}
                  </dd>
                </div>
              )}
              {certification.validUntil && (
                <div>
                  <dt className="text-muted-foreground mb-1">Valid Until</dt>
                  <dd className="font-medium text-slate-dark">{certification.validUntil}</dd>
                </div>
              )}
            </dl>
          </div>

          <div>
            <h3 className="font-semibold text-slate-dark mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              What This Means for You
            </h3>
            <ul className="space-y-3">
              {certification.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-dark/80">
                  <div className="mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-deep" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {certification.verificationLink && (
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-4">
              <p className="text-sm text-slate-dark/70 mb-3">
                Verify this certification independently:
              </p>
              <a
                href={certification.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Visit Official Website
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              <strong>Note:</strong> Certifications are subject to regular audits and renewals. 
              All information is current as of the latest verification date. For the most up-to-date 
              certification status, please contact our customer service team.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
