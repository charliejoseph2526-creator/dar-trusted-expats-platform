import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, MapPin, Maximize2, ArrowRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const [imgError, setImgError] = useState(false);
  const primaryImage = property.images && property.images.length > 0 ? property.images[0] : '';

  return (
    <article className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-stone-300 transition-all duration-200 flex flex-col h-full">
      {/* Image Container with Aspect Ratio - Clickable */}
      <Link
        to={`/property/${property.id}`}
        className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden block focus:outline-hidden"
        aria-label={`View details for ${property.title}`}
      >
        {!imgError && primaryImage ? (
          <img
            src={primaryImage}
            alt={property.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-stone-200 text-stone-600">
            <MapPin className="w-8 h-8 text-[#174B3A] mb-2" />
            <span className="text-xs font-semibold text-stone-700">{property.location} Residence</span>
            <span className="text-[11px] text-stone-500 mt-1">Prototype Visual Placeholder</span>
          </div>
        )}

        {/* Prototype Tag / Watermark */}
        <div className="absolute top-3 left-3 bg-[#174B3A]/85 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md shadow-xs">
          Sample Preview
        </div>

        {/* Furnishing Tag */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-stone-800 text-[11px] font-medium px-2.5 py-1 rounded-md shadow-xs border border-stone-200/50">
          {property.furnishing}
        </div>

        {/* Price Scrim */}
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-3 pt-6 flex items-end justify-between text-white">
          <div>
            <div className="text-xl font-bold tracking-tight text-white font-mono tabular-nums">
              ${property.priceUsd.toLocaleString()}
              <span className="text-xs font-normal text-stone-300 ml-1">/ month</span>
            </div>
            <div className="text-[10px] text-stone-300 font-mono">
              ~TZS {property.priceTzsApprox.toLocaleString()}
            </div>
          </div>
          <span className="text-[11px] font-medium text-stone-200 bg-white/15 px-2 py-0.5 rounded">
            {property.propertyType}
          </span>
        </div>
      </Link>

      {/* Content Block */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Location & Title */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-[#174B3A] mb-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#C49A45] shrink-0" />
          <span className="font-semibold">{property.location}</span>
          <span className="text-stone-300">·</span>
          <span className="text-stone-500 truncate">{property.addressSummary}</span>
        </div>

        <h3 className="font-heading font-semibold text-base text-stone-900 group-hover:text-[#174B3A] transition-colors line-clamp-2 leading-snug mb-3">
          <Link to={`/property/${property.id}`} className="hover:underline underline-offset-2">
            {property.title}
          </Link>
        </h3>

        {/* Key Specs Row */}
        <div className="flex items-center gap-4 text-xs text-stone-600 pb-3 mb-4 border-b border-stone-100">
          <div className="flex items-center gap-1.5 font-medium">
            <Bed className="w-4 h-4 text-stone-400" />
            <span>{property.bedrooms} Bed{property.bedrooms > 1 ? 's' : ''}</span>
          </div>

          <div className="flex items-center gap-1.5 font-medium">
            <Bath className="w-4 h-4 text-stone-400" />
            <span>{property.bathrooms} Bath</span>
          </div>

          {property.sizeSqm && (
            <div className="flex items-center gap-1.5 font-medium">
              <Maximize2 className="w-3.5 h-3.5 text-stone-400" />
              <span>{property.sizeSqm} m²</span>
            </div>
          )}
        </div>

        {/* Amenities Preview */}
        <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] text-stone-500">
          {property.amenities.slice(0, 3).map((amenity, idx) => (
            <span
              key={idx}
              className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-[11px]"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="text-stone-400 text-[10px] self-center">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Footer with View Details */}
        <div className="mt-auto pt-2 flex items-center justify-between gap-3">
          <span className="text-[10px] text-stone-400 italic">
            Demo Listing
          </span>

          <Link
            to={`/property/${property.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174B3A] group-hover:text-[#0f3327] bg-[#174B3A]/5 hover:bg-[#174B3A]/10 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};
