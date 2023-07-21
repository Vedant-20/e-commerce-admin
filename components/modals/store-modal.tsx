"use client";

import * as z from 'zod'

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

const formSchema=z.object({
    name:z.string().min(1)
})

export const StoreModal=()=>{
    const storeModal =useStoreModal();

    return(
    <Modal title="Create Store" description="Add a new store to manage products and categories" isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
        Future create store form
    </Modal>
    )
}