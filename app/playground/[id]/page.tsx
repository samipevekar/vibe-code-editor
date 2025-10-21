'use client'

import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { TooltipProvider,  } from '@/components/ui/tooltip';
import { usePlayground } from '@/features/playground/hooks/usePlayground';
import { Separator } from '@radix-ui/react-separator';
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
    const {id} = useParams<{id: string}>();
    const { playgroundData, templateData, isLoading, error, loadPlayground, saveTemplateData } = usePlayground(id);

    console.log(templateData)
  return (
    <TooltipProvider>
        <>
        {/* TODO: template file tree */}

        <SidebarInset>
            <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
                <SidebarTrigger className='-ml-1' />
                <Separator orientation='vertical' className='h-4 mr-2' />

                <div className='flex flex-1 items-center gap-2'>
                    <div className='flex flex-col flex-1'>
                        {playgroundData?.title || 'Code Playground'}
                    </div>
                </div>
            </header>
        </SidebarInset>
        </>
    </TooltipProvider>
  )
}

export default Page
