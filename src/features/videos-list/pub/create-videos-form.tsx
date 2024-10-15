"use client"

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useTransition } from "react";
import { createVideoAction } from "../actions";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";


const createVideoFormSchema = z.object({
	name: z.string(),
	description: z.string(),
})


export function CreateVideoForm({
	className,
	revalidatePagePath,
}: {
	className: string,
	revalidatePagePath: string;
}) {
	const [isCreateTransition, startCreateTransition] = useTransition();
	const form = useForm<z.infer<typeof createVideoFormSchema>>({
		resolver: zodResolver(createVideoFormSchema),
		defaultValues: {
			name: "",
			description: ""
		},
	})
	return  (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((data) => {
					startCreateTransition(async () => {
						createVideoAction(data, revalidatePagePath)
					})
				})}
				className={cn(className, "space-y-8")}
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="name" {...field} />
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea placeholder="description" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={isCreateTransition}>Add</Button>
			</form>
		</Form>
	);
}
