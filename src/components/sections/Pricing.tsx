import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, ExternalLink } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#0B0B0B] relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C7F000]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="WORKOUT PLANS & PRICING"
          title="CHOOSE YOUR WORKOUT PLAN"
          highlightedWord="WORKOUT PLAN"
          subtitle="Instant digital access to Prem Dalia's proven workout blueprints, or apply for customized 1-on-1 mentorship."
        />

        {/* Instamojo Delivery Guarantee Pill */}
        <div className="flex items-center justify-center gap-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 rounded-full bg-[#141414] border border-white/10 text-xs text-[#D4D4D8] shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#C7F000] animate-pulse shrink-0" />
            <span className="font-bold text-white tracking-wide">Direct Instamojo Checkout</span>
            <span className="text-[#444444]">|</span>
            <span className="text-[#A1A1A1]">Instant Digital Delivery • 10+ Years Experience</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => {
            const isFeatured = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#171717] border-2 border-[#C7F000] shadow-[0_0_40px_rgba(199,240,0,0.18)] lg:-translate-y-3'
                    : 'bg-[#141414] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#C7F000] text-black text-[11px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 fill-black" />
                    <span>RECOMMENDED PLAN</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-black text-white uppercase tracking-wider font-heading">
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#A1A1A1] px-2.5 py-1 rounded bg-[#202020] border border-white/5">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#A1A1A1] leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Price / Access Block */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl sm:text-3xl font-black uppercase tracking-wider font-heading ${isFeatured ? 'text-[#C7F000]' : 'text-white'}`}>
                        {plan.priceDisplay || (plan.link ? 'INSTANT ACCESS' : 'CONSULTATION')}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A1A1A1] mt-1.5 flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000] shrink-0" />
                      {plan.link ? 'Instant checkout via Instamojo' : 'Personalized training & check-ins'}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-left">
                        {feat.included ? (
                          <Check className="w-4 h-4 text-[#C7F000] shrink-0 mt-0.5 stroke-[2.5]" />
                        ) : (
                          <X className="w-4 h-4 text-[#444444] shrink-0 mt-0.5" />
                        )}
                        <span className={`text-xs sm:text-sm ${feat.included ? 'text-[#D4D4D8]' : 'text-[#555555]'}`}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                {plan.link ? (
                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full mt-4 py-3.5 px-6 rounded-lg font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg select-none group ${
                      isFeatured
                        ? 'bg-[#C7F000] text-black hover:bg-[#d6ff00] shadow-[#C7F000]/25'
                        : 'bg-[#202020] text-white hover:bg-[#C7F000] hover:text-black border border-white/10 hover:border-[#C7F000]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <Button
                    variant={isFeatured ? 'primary' : 'secondary'}
                    size="md"
                    showArrow
                    onClick={() => onSelectPlan(plan.name)}
                    className="w-full mt-4"
                  >
                    {plan.ctaText}
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Security & Access Note */}
        <div className="mt-12 text-center text-xs text-[#71717A]">
          <p>✓ Instant access upon purchase. Secure encrypted payment processing via Instamojo. Need custom training guidance? Contact Prem directly.</p>
        </div>

      </div>
    </section>
  );
};

