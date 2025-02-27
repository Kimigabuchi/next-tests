"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { Skeleton } from "@/shared/ui/skeleton";
import { useAppSession } from "@/entities/session/use-app-session";
import { useSignOut } from "@/features/auth/use-sign-out";
import { SignInButton } from "@/features/auth/sign-in-button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
// import { ProfileAvatar, getProfileDisplayName } from "@/entities/user/profile";

export function Profile() {
	const session = useAppSession();
	const { signOut, isPending: isLoadingSignOut } = useSignOut();

	if (session.status === "loading") {
		return <Skeleton className="w-8 h-8 rounded-full" />;
	}

	if (session.status === "unauthenticated") {
		return <SignInButton />;
	}

	// const user = session?.data?.user;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="p-px rounded-full self-center h-8 w-8"
				>
					<Avatar className="w-8 h-8">
						<AvatarImage src={session.data?.user.image} />
						<AvatarFallback>AC</AvatarFallback>
					</Avatar>
					{/* <ProfileAvatar profile={user} className="w-8 h-8" /> */}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 mr-2 ">
				<DropdownMenuLabel>
					<p>Account</p>
					<p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
						{session.data?.user.name}
					</p>
				</DropdownMenuLabel>
				<DropdownMenuGroup></DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						{/* <Link href={`/profile/${user?.id}`}> */}
						<Link href={`/profile/1`}>
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem
						disabled={isLoadingSignOut}
						onClick={() => signOut()}
					>
						<LogOut className="mr-2 h-4 w-4" />
						<span>Exit</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
