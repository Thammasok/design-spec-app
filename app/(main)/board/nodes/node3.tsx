'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogOverlay,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import * as CTab from '@/components/custom/tabs'
import { cn } from '@/lib/utils'
import { ChevronDownIcon, CodeXmlIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

interface INode3 {}

type TMethod = {
  value: string
  label: string
  color: string
  textColor: string
}

const methods: TMethod[] = [
  {
    value: 'get',
    label: 'GET',
    color: 'green',
    textColor: 'text-green-500',
  },
  {
    value: 'post',
    label: 'POST',
    color: 'amber',
    textColor: 'text-amber-500',
  },
  {
    value: 'put',
    label: 'PUT',
    color: 'blue',
    textColor: 'text-blue-500',
  },
  {
    value: 'patch',
    label: 'PATCH',
    color: 'purple',
    textColor: 'text-purple-500',
  },
  {
    value: 'delete',
    label: 'DELETE',
    color: 'red',
    textColor: 'text-red-500',
  },
  {
    value: 'options',
    label: 'OPTIONS',
    color: 'orange',
    textColor: 'text-orange-500',
  },
]

export default function Node3({}: INode3) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [method, setMethod] = useState<TMethod>(methods[0])

  const handleMethodChange = (value: TMethod) => {
    setMethod(value)
  }

  return (
    <>
      <div className='group grid gap-4 items-start justify-items-center grid-cols-1'>
        <div>
          <div
            className='focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 node flex flex-col justify-between pointer-events-auto relative bg-background cursor-pointer focus:!ring-0 border-y dark:border-gray-100 hover:bg-secondaryBg hover:dark:bg-gray-100 sm:min-w-[288px] sm:w-auto sm:h-[144px] sm:mx-0 sm:p-6 sm:shadow-sm sm:rounded-xl sm:border sm:border-gray-200 sm:dark:border-gray-200 sm:translate-x-px sm:translate-y-px sm:relative sm:z-10 hover:sm:border-blue-200 hover:sm:bg-background hover:sm:shadow-[0px_0px_0px_4px_rgba(166,_103,_228,_0.06)] hover:sm:dark:shadow-none hover:sm:dark:border-gray-200 hover:sm:dark:bg-gray-100 w-[288px] h-[144px] mx-0 p-6 shadow-sm rounded-xl border border-gray-100 dark:bg-gray-100'
            onClick={() => setIsOpen(true)}
          >
            <div className='flex space-x-3 items-start pr-4'>
              <div
                className='text-current icon-container icon-lg text-2xl flex-shrink-0'
                aria-hidden='true'
              >
                <Image
                  src='https://images.ctfassets.net/xz1dnu24egyd/1IRkfXmxo8VP2RAE5jiS1Q/ea2086675d87911b0ce2d34c354b3711/gitlab-logo-500.png'
                  alt=''
                  width={24}
                  height={24}
                />
              </div>
              <div className='flex flex-col space-y-1 max-w-full w-full'>
                <p
                  className='text-h6 font-semibold truncate'
                  title='dvi-happy-dee-authentication-service'
                >
                  /auth/sign-in
                </p>
                <p
                  className='text-sm text-gray-600 truncate'
                  style={{ maxWidth: 'calc(100% - 12px)' }}
                >
                  dvi-happy-dee-authentication-service
                </p>
              </div>
            </div>
            <div className='flex space-x-4 items-center'>
              <div className='icon-container icon-sm text-lg text-green-500' aria-hidden='true'>
                <CodeXmlIcon size={18} />
              </div>
              <p className='text-sm text-gray-600'>3 related functions</p>
            </div>
          </div>
        </div>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className='sm:min-w-[800px] xs:max-w-full'>
          <SheetHeader>
            <SheetTitle>Rest APIs Name</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className='flex flex-col gap-4 p-4 pt-0'>
            <Tabs defaultValue='service' orientation='vertical' className='w-full'>
              <TabsList className='@4xl/main:flex grid w-full grid-cols-5'>
                <TabsTrigger value='basic'>Basic</TabsTrigger>
                <TabsTrigger value='service'>Service</TabsTrigger>
                <TabsTrigger value='functions' className='gap-1'>
                  Functions{' '}
                  <Badge
                    variant='secondary'
                    className='flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground/30'
                  >
                    3
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value='settings' className='gap-1'>
                  Settings{' '}
                  <Badge
                    variant='secondary'
                    className='flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground/30'
                  >
                    2
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value='focus-documents'>Focus Documents</TabsTrigger>
              </TabsList>

              <TabsContent
                value='basic'
                className='relative flex flex-col gap-4 mt-4 overflow-auto'
              >
                Name
              </TabsContent>
              <TabsContent
                value='service'
                className='relative flex flex-col gap-4 mt-4 overflow-auto'
              >
                {/* URL */}
                <div className='flex items-center justify-between gap-1 border bg-muted border-gray-200 dark:border-gray-200 rounded-lg'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className='flex items-center justify-between cursor-pointer'>
                        <div
                          className={`${method.textColor} text-left text-sm font-semibold py-2 pl-4 pr-0 w-[88px]`}
                        >
                          {method.label}
                        </div>
                        <ChevronDownIcon size={16} className='text-gray-600' />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='start'>
                      {methods.map((methodItem) => (
                        <DropdownMenuItem
                          key={methodItem.value}
                          className={cn(
                            `${methodItem.textColor} font-semibold text-sm cursor-pointer`,
                            methodItem.value === method.value && 'bg-gray-100 dark:bg-gray-100',
                          )}
                          onClick={() => handleMethodChange(methodItem)}
                        >
                          {methodItem.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Separator orientation='vertical' className='!h-6 w-2' />
                  <Input
                    type='text'
                    className='border-none shadow-none focus-visible:ring-0 focus-visible:ring-transparent'
                    placeholder='Enter URL or paste text'
                  />
                </div>

                {/* Requests */}
                <div>
                  <CTab.Tabs defaultValue='params'>
                    <CTab.TabsList className='flex gap-2'>
                      <CTab.TabsTrigger value='params'>Params</CTab.TabsTrigger>
                      <CTab.TabsTrigger value='body'>Body</CTab.TabsTrigger>
                      <CTab.TabsTrigger value='headers'>Headers</CTab.TabsTrigger>
                      <CTab.TabsTrigger value='authorization'>Authorization</CTab.TabsTrigger>
                      <CTab.TabsTrigger value='pre-requests-scripts'>
                        Pre-requests Scripts
                      </CTab.TabsTrigger>
                      <CTab.TabsTrigger value='tests'>Tests</CTab.TabsTrigger>
                    </CTab.TabsList>
                    <CTab.TabsContent value='params'>
                      <div className='flex flex-col gap-2'>
                        <div className='text-sm font-bold'>Query Params</div>
                      </div>
                    </CTab.TabsContent>
                    <CTab.TabsContent value='authorization'>
                      Change your authorization here.
                    </CTab.TabsContent>
                    <CTab.TabsContent value='headers'>Change your headers here.</CTab.TabsContent>
                    <CTab.TabsContent value='body'>Change your body here.</CTab.TabsContent>
                    <CTab.TabsContent value='scripts'>
                      <textarea
                        className='w-full h-full p-2 border border-gray-200 rounded-lg'
                        rows={10}
                      />
                    </CTab.TabsContent>
                  </CTab.Tabs>
                </div>
              </TabsContent>

              <TabsContent value='functions' className='flex flex-col'>
                <div className='aspect-video w-full flex-1 rounded-lg border border-dashed'>
                  functions
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type='submit'>Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      {/* <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className='fixed inset-0 z-20 !bg-white' />
        <DialogContent className='sm:max-w-4xl'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between gap-1 border border-gray-200 dark:border-gray-200 rounded-lg'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className='flex items-center justify-between cursor-pointer'>
                    <div
                      className={`${method.textColor} text-left text-sm font-semibold py-2 pl-4 pr-0 w-[88px]`}
                    >
                      {method.label}
                    </div>
                    <ChevronDownIcon size={16} className='text-gray-600' />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='start'>
                  {methods.map((methodItem) => (
                    <DropdownMenuItem
                      key={methodItem.value}
                      className={cn(
                        `${methodItem.textColor} font-semibold text-sm cursor-pointer`,
                        methodItem.value === method.value && 'bg-gray-100 dark:bg-gray-100',
                      )}
                      onClick={() => handleMethodChange(methodItem)}
                    >
                      {methodItem.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Separator orientation='vertical' className='!h-6 w-2' />
              <Input
                type='text'
                className='border-none shadow-none focus-visible:ring-0 focus-visible:ring-transparent'
                placeholder='Enter URL or paste text'
              />
            </div>

            <div>
              <Tabs defaultValue='params'>
                <TabsList>
                  <TabsTrigger value='params'>Params</TabsTrigger>
                  <TabsTrigger value='authorization'>Authorization</TabsTrigger>
                  <TabsTrigger value='headers'>Headers</TabsTrigger>
                  <TabsTrigger value='body'>Body</TabsTrigger>
                  <TabsTrigger value='scripts'>Scripts</TabsTrigger>
                </TabsList>
                <TabsContent value='params'>
                  <div className='flex flex-col gap-2'>
                    <div className='text-sm font-bold'>Query Params</div>
                  </div>
                </TabsContent>
                <TabsContent value='authorization'>Change your authorization here.</TabsContent>
                <TabsContent value='headers'>Change your headers here.</TabsContent>
                <TabsContent value='body'>Change your body here.</TabsContent>
                <TabsContent value='scripts'>Change your scripts here.</TabsContent>
              </Tabs>
            </div>
          </div>
          <DialogFooter>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </>
  )
}
