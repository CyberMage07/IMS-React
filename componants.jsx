/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bcSfdmjvmM8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LineChartIcon, CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Component() {
  return (
    <div className="grid min-h-screen w-full bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <div className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                prefetch={false}
              >
                <div className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Vehicles</span>
              </Link>
              <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                <div className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <div className="h-5 w-5" />
                Inventory
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <div className="h-5 w-5" />
                Shipments
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <div className="h-5 w-5" />
                Reports
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <div className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" prefetch={false}>
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Inventory</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search inventory..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Inventory Overview</CardTitle>
              <CardDescription>A quick look at your current inventory levels.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col items-start gap-2 p-4 rounded-lg bg-muted">
                  <div className="text-muted-foreground">Total Parts</div>
                  <div className="text-4xl font-bold">12,345</div>
                </div>
                <div className="flex flex-col items-start gap-2 p-4 rounded-lg bg-muted">
                  <div className="text-muted-foreground">Low Stock</div>
                  <div className="text-4xl font-bold">234</div>
                </div>
                <div className="flex flex-col items-start gap-2 p-4 rounded-lg bg-muted">
                  <div className="text-muted-foreground">In Transit</div>
                  <div className="text-4xl font-bold">789</div>
                </div>
                <div className="flex flex-col items-start gap-2 p-4 rounded-lg bg-muted">
                  <div className="text-muted-foreground">Damaged</div>
                  <div className="text-4xl font-bold">56</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-06-chunk-1">
            <CardHeader className="pb-3">
              <CardTitle>Low Stock Alerts</CardTitle>
              <CardDescription>Parts that are running low and need to be restocked.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-red-500 rounded-md flex items-center justify-center aspect-square w-8 h-8">
                      <div className="w-4 h-4 text-red-50" />
                    </div>
                    <div>
                      <div className="font-medium">Brake Pads</div>
                      <div className="text-sm text-muted-foreground">Part #: BP-1234</div>
                    </div>
                  </div>
                  <div className="text-red-500 font-medium">24 in stock</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-red-500 rounded-md flex items-center justify-center aspect-square w-8 h-8">
                      <div className="w-4 h-4 text-red-50" />
                    </div>
                    <div>
                      <div className="font-medium">Spark Plugs</div>
                      <div className="text-sm text-muted-foreground">Part #: SP-5678</div>
                    </div>
                  </div>
                  <div className="text-red-500 font-medium">12 in stock</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-red-500 rounded-md flex items-center justify-center aspect-square w-8 h-8">
                      <div className="w-4 h-4 text-red-50" />
                    </div>
                    <div>
                      <div className="font-medium">Windshield Wipers</div>
                      <div className="text-sm text-muted-foreground">Part #: WW-9012</div>
                    </div>
                  </div>
                  <div className="text-red-500 font-medium">7 in stock</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-06-chunk-2">
            <CardHeader className="pb-3">
              <CardTitle>Inventory Trends</CardTitle>
              <CardDescription>Visualize your inventory levels over time.</CardDescription>
            </CardHeader>
            <CardContent>
              <LinechartChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
        <div className="border shadow-sm rounded-lg">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
                <TabsTrigger value="in-transit">In Transit</TabsTrigger>
                <TabsTrigger value="damaged">Damaged</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1 text-sm">
                      <div className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>In Stock</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Low Stock</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>In Transit</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Damaged</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1 text-sm">
                  <div className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Export</span>
                </Button>
                <Button size="sm" className="h-8 gap-1 text-sm">
                  <div className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Add Part</span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Part</TableHead>
                    <TableHead className="hidden sm:table-cell">Part #</TableHead>
                    <TableHead className="hidden sm:table-cell">Location</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Brake Pads</div>
                      <div className="hidden text-sm text-muted-foreground sm:inline">BP-1234</div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">BP-1234</TableCell>
                    <TableCell className="hidden sm:table-cell">Warehouse A</TableCell>
                    <TableCell className="text-right">24</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="text-red-500">
                        Low Stock
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <div className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Move</DropdownMenuItem>
                          <DropdownMenuItem>Adjust Quantity</DropdownMenuItem>
                          <DropdownMenuItem>Mark as Damaged</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Spark Plugs</div>
                      <div className="hidden text-sm text-muted-foreground sm:inline">SP-5678</div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">SP-5678</TableCell>
                    <TableCell className="hidden sm:table-cell">Warehouse B</TableCell>
                    <TableCell className="text-right">12</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="text-red-500">
                        Low Stock
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <div className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Move</DropdownMenuItem>
                          <DropdownMenuItem>Adjust Quantity</DropdownMenuItem>
                          <DropdownMenuItem>Mark as Damaged</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}