import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { CheckCircleIcon, HardDriveIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface INode4 {}

export default function Node4({}: INode4) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <div className='group grid gap-4 items-start justify-items-center grid-cols-1'>
        <div>
          <div
            className='focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 node flex flex-col justify-between pointer-events-auto relative bg-background cursor-pointer focus:!ring-0 border-y dark:border-gray-100 hover:bg-secondaryBg hover:dark:bg-gray-100 sm:w-[288px] sm:h-[144px] sm:mx-0 sm:p-6 sm:shadow-sm sm:rounded-xl sm:border sm:border-gray-200 sm:dark:border-gray-200 sm:translate-x-px sm:translate-y-px sm:relative sm:z-10 hover:sm:border-blue-200 hover:sm:bg-background hover:sm:shadow-[0px_0px_0px_4px_rgba(166,_103,_228,_0.06)] hover:sm:dark:shadow-none hover:sm:dark:border-gray-200 hover:sm:dark:bg-gray-100 w-[288px] h-[144px] mx-0 p-6 shadow-sm rounded-xl border border-gray-100 dark:bg-gray-100'
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
                <p className='text-h6 font-semibold truncate' title='dvi-authentication-service'>
                  dvi-authentication-service
                </p>
                <p
                  className='text-sm text-gray-600 truncate'
                  style={{ maxWidth: 'calc(100% - 12px)' }}
                >
                  chroma-core/chroma:0.6.3
                </p>
              </div>
            </div>
            <div className='flex space-x-4 items-center'>
              <div className='icon-container icon-sm text-lg text-green-500' aria-hidden='true'>
                <CheckCircleIcon />
              </div>
              <p className='text-sm text-gray-600'>Just deployed</p>
            </div>
          </div>
          <div>
            <Link
              href='#'
              rel='noreferrer'
              as='div'
              className={cn(
                'bg-white z-[5] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 node-modifier relative grid px-4 -mx-4 py-4 sm:bg-secondaryBg overflow-hidden sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:gap-4 sm:border sm:rounded-xl sm:translate-x-px sm:-mt-[24px] sm:pt-[24px] sm:pb-0 sm:mx-0',
                // 'group-hover:translate-y-[10px] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out',
              )}
            >
              <div
                className='icon-container icon-sm text-lg text-gray-300  group-hover:visible invisible'
                aria-hidden='true'
              >
                <HardDriveIcon />
              </div>
              <p className='text-sm text-gray-500  group-hover:visible invisible'>/chroma/chroma</p>
            </Link>
            <Link
              href='#'
              rel='noreferrer'
              as='div'
              className={cn(
                'bg-white z-[2] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 node-modifier relative grid px-4 -mx-4 py-4 sm:bg-secondaryBg overflow-hidden sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:gap-4 sm:border sm:rounded-xl sm:translate-x-px sm:-mt-[24px] sm:pt-[24px] sm:pb-0 sm:mx-0',
                'group-hover:h-[72px] h-10',
              )}
            >
              <div
                className='icon-container icon-sm text-lg text-gray-300  group-hover:visible invisible'
                aria-hidden='true'
              >
                <HardDriveIcon />
              </div>
              <p className='text-sm text-gray-500  group-hover:visible invisible'>/chroma/chroma</p>
            </Link>
          </div>
        </div>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className='grid gap-4 p-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input id='name' value='Pedro Duarte' className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Username
              </Label>
              <Input id='username' value='@peduarte' className='col-span-3' />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type='submit'>Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
