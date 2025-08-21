// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  DollarSign,
  Calendar,
  TrendingUp,
  Download,
  Plus,
  GraduationCap,
  BookOpen,
  FlaskConical,
  Smartphone,
  Building2,
} from "lucide-react"

const paymentCategories = [
  {
    title: "Pay Tuition",
    subtitle: "Spring 2024",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    title: "Course Materials",
    subtitle: "Books & Resources",
    icon: BookOpen,
    color: "bg-green-500",
  },
  {
    title: "Lab Fees",
    subtitle: "Science Labs",
    icon: FlaskConical,
    color: "bg-purple-500",
  },
  {
    title: "Other Fees",
    subtitle: "Additional Charges",
    icon: Plus,
    color: "bg-orange-500",
  },
]

const paymentMethods = [
  {
    name: "Visa",
    icon: CreditCard,
    available: true,
  },
  {
    name: "Mastercard",
    icon: CreditCard,
    available: true,
  },
  {
    name: "Bank Transfer",
    icon: Building2,
    available: true,
  },
  {
    name: "PayPal",
    icon: Smartphone,
    available: true,
  },
]

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white p-6 md:p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Payment Center</h1>
              <p className="text-purple-100">Manage your tuition, fees, and educational expenses</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <div className="text-3xl md:text-4xl font-bold">$2450.00</div>
              <div className="text-purple-200">Current Balance</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">$2450.00</div>
              <div className="text-purple-200 text-sm">Current Balance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">$1250.00</div>
              <div className="text-purple-200 text-sm">Next Payment Due</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">$8750.00</div>
              <div className="text-purple-200 text-sm">Total Paid</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">3</div>
              <div className="text-purple-200 text-sm">Pending Payments</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Payment Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-flex">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="categories" className="flex items-center gap-2">
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
                Payment Categories
              </TabsTrigger>
              <TabsTrigger value="methods" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Payment Methods
              </TabsTrigger>
              <TabsTrigger value="make-payment" className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Make Payment
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Transaction History
              </TabsTrigger>
              <TabsTrigger value="export" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export Statement
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-6">
            {/* Payment Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Current Balance */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-blue-500" />
                    <CardTitle className="text-lg">Current Balance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$2450.00</div>
                  <p className="text-sm text-gray-600 mb-4">Outstanding amount due</p>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">Pay Now</Button>
                </CardContent>
              </Card>

              {/* Next Payment Due */}
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <CardTitle className="text-lg">Next Payment Due</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 mb-2">$1250.00</div>
                  <p className="text-sm text-gray-600 mb-2">Due January 15, 2024</p>
                  <Badge className="bg-yellow-100 text-yellow-800 mb-4">Tuition Fee</Badge>
                </CardContent>
              </Card>

              {/* Payment Summary */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <CardTitle className="text-lg">Payment Summary</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">$8750.00</div>
                  <p className="text-sm text-gray-600 mb-2">Total paid this year</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Completed:</span>
                    <span className="text-sm text-gray-600">15 payments</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {paymentCategories.map((category, index) => {
                    const IconComponent = category.icon
                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-6 text-center">
                          <div
                            className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="font-medium mb-1">{category.title}</h3>
                          <p className="text-sm text-gray-600">{category.subtitle}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 grid grid-cols-2 gap-1">
                    <div className="bg-gray-400 rounded-sm"></div>
                    <div className="bg-gray-400 rounded-sm"></div>
                    <div className="bg-gray-400 rounded-sm"></div>
                    <div className="bg-gray-400 rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">Payment Categories</h3>
                <p className="text-gray-600 mb-4">View and manage different payment categories</p>
                <Button>Explore Categories</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="methods">
            <Card>
              <CardHeader>
                <CardTitle>Accepted Payment Methods</CardTitle>
                <p className="text-sm text-gray-600">Choose from multiple secure payment options</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {paymentMethods.map((method, index) => {
                    const IconComponent = method.icon
                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6 text-center">
                          <IconComponent className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                          <h3 className="font-medium mb-2">{method.name}</h3>
                          <Badge variant={method.available ? "default" : "secondary"}>
                            {method.available ? "Available" : "Coming Soon"}
                          </Badge>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="make-payment">
            <Card>
              <CardContent className="p-8 text-center">
                <Plus className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Make a Payment</h3>
                <p className="text-gray-600 mb-4">Process your tuition and fee payments securely</p>
                <Button>Start Payment Process</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardContent className="p-8 text-center">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Transaction History</h3>
                <p className="text-gray-600 mb-4">View your complete payment history and receipts</p>
                <Button>View History</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="export">
            <Card>
              <CardContent className="p-8 text-center">
                <Download className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Export Statement</h3>
                <p className="text-gray-600 mb-4">Download your payment statements and receipts</p>
                <Button>Export Documents</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 mt-8 border-t">
          <div>
            <h3 className="font-semibold mb-3">Payment Information</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Secure payment processing</p>
              <p>Multiple payment options</p>
              <p>Instant payment confirmation</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Accepted Methods</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Visa</p>
              <p>Mastercard</p>
              <p>Bank Transfer</p>
              <p>PayPal</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Help & Support</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Payment FAQ</p>
              <p>Refund Policy</p>
              <p>Payment Plans</p>
              <p>Technical Support</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact Finance</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>(555) 123-4567</p>
              <p>finance@eduportal.edu</p>
              <p>Mon-Fri 8AM-5PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
