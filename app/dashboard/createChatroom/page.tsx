'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
	room_name: z
		.string()
		.min(3, {
			message: 'Room name must be at least 3 characters long',
		})
		.max(50, {
			message: 'Room name must be at most 50 characters long',
		}),
	room_description: z.string().max(100, {
		message: 'Room description must be at most 100 characters long',
	}),
	banner: z.string().url({}),
});

function createChatroom() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit(data: z.infer<typeof formSchema>) {}

	return (
		<div className='p-4'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name='room_name'
						render={({ field }) => (
							<FormItem className='p-2'>
								<FormLabel>Room Name</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormDescription>
									{form.formState.errors.room_name?.message}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='room_description'
						render={({ field }) => (
							<FormItem className='p-2'>
								<FormLabel>Room Description</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormDescription>
									{
										form.formState.errors.room_description
											?.message
									}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='banner'
						render={({ field }) => (
							<FormItem className='p-2'>
								<FormLabel>Banner</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormDescription>
									{form.formState.errors.banner?.message}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</form>
				<Button type='submit'> Create Chatroom </Button>
			</Form>
		</div>
	);
}

export default createChatroom;
