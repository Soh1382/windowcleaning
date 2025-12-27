import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteRequestSchema, type QuoteRequestInput } from '@aquamarine/shared';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import axios from 'axios';

const STEPS = ['Contact Details', 'Property Info', 'Services', 'Review'];

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // We'll use a single form for simplicity, but validate per step ideally.
  // For this MVP, we validate everything at the end or use partial validation (not implemented here for brevity).
  const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm<QuoteRequestInput>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      serviceTypes: [],
      propertyType: 'DETACHED', // Default
      frequency: 'WEEKLY_4'
    }
  });

  const formData = watch();

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteRequestInput)[] = [];
    if (currentStep === 0) fieldsToValidate = ['firstName', 'lastName', 'email', 'phone'];
    if (currentStep === 1) fieldsToValidate = ['addressLine1', 'postcode', 'propertyType'];
    if (currentStep === 2) fieldsToValidate = ['serviceTypes', 'frequency'];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = async (data: QuoteRequestInput) => {
    setIsSubmitting(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      await axios.post(`${apiUrl}/api/quotes/request`, data);
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to submit quote', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-screen py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">Quote Request Received!</h1>
          <p className="text-lg text-secondary-600 mb-8">
            Thank you for contacting Aquamarine Window Cleaning. We have received your details and will send you a personalized quote via email shortly.
          </p>
          <Button onClick={() => window.location.href = '/'}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 text-center">Get a Free Instant Quote</h1>
          <div className="flex justify-between items-center mt-8 px-4">
            {STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                  index <= currentStep 
                    ? 'bg-primary-600 border-primary-600 text-white' 
                    : 'bg-white border-secondary-300 text-secondary-400'
                }`}>
                  {index + 1}
                </div>
                <span className={`text-xs mt-2 font-medium ${index <= currentStep ? 'text-primary-700' : 'text-secondary-400'}`}>
                  {step}
                </span>
              </div>
            ))}
             {/* Progress Bar Background */}
             <div className="absolute top-[148px] left-0 w-full h-0.5 bg-secondary-200 -z-0 hidden md:block" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden">
          <form onSubmit={handleSubmit(onSubmit)} className="p-8">
            {/* Step 1: Contact Details */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-secondary-900 border-b pb-4">Contact Details</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="First Name" {...register('firstName')} error={errors.firstName?.message} />
                  <Input label="Last Name" {...register('lastName')} error={errors.lastName?.message} />
                </div>
                <Input label="Email Address" type="email" {...register('email')} error={errors.email?.message} />
                <Input label="Phone Number" type="tel" {...register('phone')} error={errors.phone?.message} />
              </div>
            )}

            {/* Step 2: Property Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-secondary-900 border-b pb-4">Property Information</h2>
                <Input label="Address Line 1" {...register('addressLine1')} error={errors.addressLine1?.message} />
                <Input label="Postcode" {...register('postcode')} error={errors.postcode?.message} />
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Property Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['TERRACED', 'SEMI_DETACHED', 'DETACHED', 'BUNGALOW', 'COMMERCIAL'].map((type) => (
                      <label key={type} className={`
                        flex items-center justify-center p-3 rounded-md border-2 cursor-pointer transition-all
                        ${formData.propertyType === type ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-secondary-200 hover:border-secondary-300'}
                      `}>
                        <input 
                          type="radio" 
                          value={type} 
                          {...register('propertyType')} 
                          className="sr-only"
                        />
                        <span className="capitalize text-sm font-medium">{type.replace('_', ' ').toLowerCase()}</span>
                      </label>
                    ))}
                  </div>
                  {errors.propertyType && <p className="text-sm text-red-500 mt-1">{errors.propertyType.message}</p>}
                </div>
              </div>
            )}

            {/* Step 3: Services */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-secondary-900 border-b pb-4">Select Services</h2>
                
                <div className="space-y-3">
                  {['Residential Window Cleaning', 'Gutter Cleaning', 'Conservatory Valet', 'Commercial Cleaning'].map((service) => (
                     <label key={service} className={`
                        flex items-center p-4 rounded-lg border cursor-pointer transition-all
                        ${formData.serviceTypes?.includes(service) ? 'border-primary-500 bg-primary-50' : 'border-secondary-200 hover:bg-secondary-50'}
                     `}>
                       <input 
                         type="checkbox" 
                         value={service} 
                         {...register('serviceTypes')} 
                         className="h-5 w-5 text-primary-600 rounded focus:ring-primary-500 border-gray-300"
                       />
                       <span className="ml-3 font-medium text-secondary-900">{service}</span>
                     </label>
                  ))}
                  {errors.serviceTypes && <p className="text-sm text-red-500 mt-1">{errors.serviceTypes.message}</p>}
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Preferred Frequency</label>
                   <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: 'WEEKLY_4', label: 'Every 4 Weeks' },
                      { val: 'WEEKLY_8', label: 'Every 8 Weeks' },
                      { val: 'ONE_OFF', label: 'One-off Clean' }
                    ].map((opt) => (
                      <label key={opt.val} className={`
                        text-center p-3 rounded-md border-2 cursor-pointer transition-all
                        ${formData.frequency === opt.val ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-secondary-200 hover:border-secondary-300'}
                      `}>
                        <input 
                          type="radio" 
                          value={opt.val} 
                          {...register('frequency')} 
                          className="sr-only"
                        />
                        <span className="text-sm font-medium">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-secondary-900 border-b pb-4">Review Details</h2>
                
                <div className="grid md:grid-cols-2 gap-6 bg-secondary-50 p-6 rounded-lg">
                  <div>
                    <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-2">Contact</h3>
                    <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                    <p className="text-secondary-600">{formData.email}</p>
                    <p className="text-secondary-600">{formData.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-2">Property</h3>
                    <p className="font-medium">{formData.addressLine1}</p>
                    <p className="text-secondary-600">{formData.postcode}</p>
                    <p className="text-secondary-600 capitalize">{formData.propertyType?.replace('_', ' ').toLowerCase()}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-2">Service Plan</h3>
                    <ul className="list-disc list-inside text-primary-700 font-medium">
                      {formData.serviceTypes?.map((s: string) => <li key={s}>{s}</li>)}
                    </ul>
                    <p className="mt-2 text-secondary-600">Frequency: <span className="font-medium">{formData.frequency?.replace('_', ' ')}</span></p>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Additional Notes</label>
                  <textarea 
                    {...register('notes')}
                    className="w-full rounded-md border border-secondary-200 px-3 py-2 h-24 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    placeholder="Any specific requirements (e.g. conservatory roof, unlock side gate code)..."
                  ></textarea>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between pt-6 border-t border-secondary-100">
              {currentStep > 0 ? (
                <Button type="button" variant="outline" onClick={prevStep} className="pl-2">
                  <ChevronLeft className="w-4 h-4 mr-1" /> Back
                </Button>
              ) : <div></div>}

              {currentStep < STEPS.length - 1 ? (
                <Button type="button" onClick={nextStep} className="pr-2">
                  Next Step <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting} className="min-w-[140px]">
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
