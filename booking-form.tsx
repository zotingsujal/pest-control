import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  propertyType: z.string().min(1, "Please select a property type"),
  pestProblem: z.string().min(1, "Please select a pest problem"),
  preferredDate: z.string().optional(),
  notes: z.string().optional(),
});

export function BookingForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "", phone: "", email: "",
      propertyType: "", pestProblem: "", preferredDate: "", notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inspection Requested Successfully",
      description: "Our expert will call you within 30 minutes to confirm your appointment.",
    });
    form.reset();
  }

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">

            {/* Left Side */}
            <div className="p-10 md:w-2/5 text-white flex flex-col justify-between" style={{ backgroundColor: "#152E35" }}>
              <div>
                <h3 className="text-3xl font-bold mb-4">Book Your Free Pest Inspection</h3>
                <p className="mb-8" style={{ color: "#a8c8c0" }}>Schedule a comprehensive assessment of your property today. No commitment required.</p>

                <ul className="space-y-6">
                  {[
                    { title: "Expert Assessment", desc: "Thorough check of all vulnerable areas." },
                    { title: "Transparent Quote", desc: "Clear pricing with no hidden charges." },
                    { title: "Fast Response", desc: "We usually call back within 30 minutes." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: "#E3F2EE" }} />
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-sm" style={{ color: "#a8c8c0" }}>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-10 md:w-3/5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="fullName" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-gray-50 border-gray-200" data-testid="input-fullname" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} className="bg-gray-50 border-gray-200" data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="propertyType" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Property Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50 border-gray-200" data-testid="select-property">
                              <SelectValue placeholder="Select property type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="apartment">Apartment/Flat</SelectItem>
                            <SelectItem value="house">Independent House/Villa</SelectItem>
                            <SelectItem value="office">Office Space</SelectItem>
                            <SelectItem value="restaurant">Restaurant/Cafe</SelectItem>
                            <SelectItem value="warehouse">Warehouse/Godown</SelectItem>
                            <SelectItem value="other">Other Commercial</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="pestProblem" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Pest Problem *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50 border-gray-200" data-testid="select-pest">
                              <SelectValue placeholder="Select primary pest" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cockroaches">Cockroaches</SelectItem>
                            <SelectItem value="termites">Termites</SelectItem>
                            <SelectItem value="bedbugs">Bed Bugs</SelectItem>
                            <SelectItem value="rats">Rats / Mice</SelectItem>
                            <SelectItem value="mosquitoes">Mosquitoes</SelectItem>
                            <SelectItem value="general">General Inspection</SelectItem>
                            <SelectItem value="other">Other / Multiple</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="notes" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">Additional Notes (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us briefly about the infestation..." className="bg-gray-50 border-gray-200 min-h-[100px]" {...field} data-testid="input-notes" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg font-bold text-[#152E35] text-lg border border-[#a8d5c9] hover:bg-[#c8e8e0] transition-colors shadow-sm"
                    style={{ backgroundColor: "#E3F2EE" }}
                    data-testid="button-submit"
                  >
                    Book Free Inspection
                  </button>

                  <p className="text-center text-sm text-gray-500 font-medium">
                    No charges for inspection. Our expert calls you within 30 minutes.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
