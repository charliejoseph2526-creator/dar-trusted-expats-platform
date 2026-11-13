import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Bed, 
  Bath, 
  MapPin, 
  Maximize2, 
  ShieldCheck, 
  Zap, 
  Droplet, 
  Check, 
  Calendar, 
  Lock, 
  ArrowLeft,
  Mail,
  HelpCircle,
  Share2,
  Heart
} from 'lucide-react';
import { propertyService } from '../services/propertyService';
import { Property } from '../types';
import { InquiryModal } from '../components/InquiryModal';

export const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      propertyService.getPropertyById(id).then((data) => {
        setProperty(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-10 h-10 border-4 border-[#174B3A] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-stone-500 text-sm">Loading residence details...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-heading font-bold text-2xl text-stone-900">
          Property Not Found
        </h2>
        <p className="text-stone-600 text-sm">
          The requested listing could not be found or may have been archived.
        </p>
        <Link
          to="/accommodation"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#174B3A] px-5 py-2.5 rounded-xl hover:bg-[#0f3327]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Accommodations</span>
        </Link>
      </div>
    );
  }

  const images = property.images && property.images.length > 0
    ? property.images
    : ['/assets/images/prop_masaki_villa_1794054958706.jpg'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back Link & Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          to="/accommodation"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-600 hover:text-[#174B3A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Listings</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleShare}
            className="p-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
            aria-label="Share property listing link"
          >
            <Share2 className="w-4 h-4 text-stone-500" />
            <span>{copied ? 'Copied Link!' : 'Share'}</span>
          </button>

          <button
            onClick={() => setSaved(!saved)}
            className={`p-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              saved
                ? 'bg-rose-50 border-rose-200 text-rose-600'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${saved ? 'fill-rose-600' : ''}`} />
            <span>{saved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Demonstration Banner */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
        <div>
          <strong>Demonstration Content:</strong> This property profile is an illustrative sample of expatriate accommodation in {property.location}, Dar es Salaam. Private owner contact numbers are protected and never displayed in public frontend directories.
        </div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-3">
        {/* Main Display Image */}
        <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-stone-900 rounded-2xl overflow-hidden shadow-md">
          <img
            src={images[activeImageIdx]}
            alt={property.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#174B3A]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-lg">
            Sample Preview · {property.location}
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs text-stone-900 text-xs font-medium px-3 py-1 rounded-lg">
            {property.furnishing}
          </div>
        </div>

        {/* Thumbnails Row */}
        {images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  activeImageIdx === idx
                    ? 'border-[#174B3A] ring-2 ring-[#174B3A]/20 scale-102'
                    : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 2-Column Content / Booking Details Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Details, Amenities, Features (8 Cols) */}
        <div className="lg:col-span-8 space-y-10">
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#174B3A] uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-[#C49A45]" />
              <span>{property.location}, Dar es Salaam</span>
              <span className="text-stone-300">·</span>
              <span className="text-stone-500 normal-case">{property.addressSummary}</span>
            </div>

            <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-stone-900 leading-tight">
              {property.title}
            </h1>

            {/* Spec strip */}
            <div className="flex flex-wrap items-center gap-6 pt-5 pb-6 border-b border-stone-200 text-stone-700 text-sm">
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-[#174B3A]" />
                <span className="font-semibold text-stone-900">{property.bedrooms}</span>
                <span className="text-stone-500">Bedrooms</span>
              </div>

              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5 text-[#174B3A]" />
                <span className="font-semibold text-stone-900">{property.bathrooms}</span>
                <span className="text-stone-500">Bathrooms</span>
              </div>

              {property.sizeSqm && (
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-5 h-5 text-[#174B3A]" />
                  <span className="font-semibold text-stone-900">{property.sizeSqm}</span>
                  <span className="text-stone-500">m² Interior</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C49A45]" />
                <span className="text-stone-700 font-medium">{property.propertyType}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-stone-900">
              About this Residence
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h2 className="font-heading font-bold text-xl text-stone-900">
              Property Amenities & Utilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-200 text-stone-800 text-sm"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#174B3A]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#174B3A]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Infrastructure for Dar es Salaam */}
          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h2 className="font-heading font-bold text-xl text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#174B3A]" />
              <span>Security & Power Infrastructure</span>
            </h2>
            <p className="text-xs text-stone-500">
              Verified residential standards important for international personnel living in Dar es Salaam.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.securityFeatures.map((sec, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200 text-stone-700 text-xs sm:text-sm font-medium"
                >
                  <Lock className="w-4 h-4 text-[#C49A45] shrink-0" />
                  <span>{sec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dar Settlement Advice Note */}
          <div className="bg-[#174B3A]/5 border border-[#174B3A]/20 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#174B3A]">
              <HelpCircle className="w-4 h-4" />
              <span>Dar es Salaam Expat Relocation Checklist for This Home</span>
            </div>
            <ul className="text-xs text-stone-600 space-y-2 list-disc pl-5">
              <li><strong>Electricity:</strong> Powered via TANESCO with automated backup generator support.</li>
              <li><strong>Water Supply:</strong> DAWASA mains supply backed by on-site reserve tanks and borehole desalination.</li>
              <li><strong>Lease Minimum:</strong> {property.minLeaseMonths} Months standard expatriate agreement with diplomatic break-clause option.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Pricing & Inquiry Card (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white rounded-2xl border border-stone-200 shadow-md p-6 space-y-6">
            {/* Price Box */}
            <div className="pb-6 border-b border-stone-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Monthly Rental
              </span>
              <div className="text-3xl font-bold font-mono text-[#174B3A] tabular-nums mt-1">
                ${property.priceUsd.toLocaleString()}
                <span className="text-sm font-normal text-stone-500 ml-1">/ month</span>
              </div>
              <div className="text-xs text-stone-500 font-mono mt-1">
                Equivalent to ~TZS {property.priceTzsApprox.toLocaleString()} / mo
              </div>
            </div>

            {/* Inclusions summary */}
            <div className="space-y-2 text-xs text-stone-600">
              <span className="font-semibold text-stone-700 block">Included in Rent:</span>
              {property.utilitiesIncluded.map((u, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C49A45]" />
                  <span>{u}</span>
                </div>
              ))}
            </div>

            {/* Security Notice */}
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
              <div className="font-semibold text-stone-800 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#174B3A]" />
                <span>Protected Contact Channel</span>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                To protect property owners and prevent unauthorized agent spam, viewings and negotiations are coordinated directly through our verified desk.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => setIsInquiryModalOpen(true)}
                className="w-full bg-[#174B3A] hover:bg-[#0f3327] text-white font-semibold py-3 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C49A45]" />
                <span>Schedule a Viewing (Demo)</span>
              </button>

              <button
                onClick={() => setIsInquiryModalOpen(true)}
                className="w-full bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Mail className="w-4 h-4 text-stone-500" />
                <span>Inquire About Lease Terms</span>
              </button>
            </div>

            <div className="text-center text-[10px] text-stone-400">
              Demonstration listing for UI prototype · No charges applied
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        title={property.title}
        type="property"
        targetId={property.id}
        targetPrice={property.priceUsd}
      />
    </div>
  );
};
