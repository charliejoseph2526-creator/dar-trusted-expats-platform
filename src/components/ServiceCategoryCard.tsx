import { Link } from 'react-router-dom';
import { 
  Building2, 
  GraduationCap, 
  Truck, 
  HeartPulse, 
  Wrench, 
  Car, 
  Wifi, 
  Compass, 
  ArrowRight 
} from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServiceCategoryCardProps {
  category: ServiceCategory;
}

export const ServiceCategoryCard = ({ category }: ServiceCategoryCardProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#174B3A]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#174B3A]" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#174B3A]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-[#174B3A]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#174B3A]" />;
      case 'Car':
        return <Car className="w-6 h-6 text-[#174B3A]" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#174B3A]" />;
      case 'Compass':
      default:
        return <Compass className="w-6 h-6 text-[#174B3A]" />;
    }
  };

  return (
    <Link
      to={category.id === 'apartments-houses' ? '/accommodation' : `/services?category=${category.id}`}
      className="group bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-[#174B3A]/30 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#174B3A]/10 group-hover:bg-[#174B3A] transition-colors flex items-center justify-center mb-4 group-hover:[&_svg]:text-[#C49A45]">
          {getIcon(category.iconName)}
        </div>

        <h3 className="font-heading font-semibold text-lg text-stone-900 group-hover:text-[#174B3A] transition-colors mb-2">
          {category.title}
        </h3>

        <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
          {category.shortDescription}
        </p>

        {/* Popular subcategories */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-stone-100">
          {category.popularSubcategories.slice(0, 3).map((sub, idx) => (
            <span
              key={idx}
              className="text-[11px] text-stone-500 bg-stone-50 px-2 py-0.5 rounded"
            >
              {sub}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#174B3A] group-hover:text-[#0f3327]">
        <span>Explore Category</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
