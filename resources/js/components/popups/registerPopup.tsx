import Popup from '@/components/popups/popup';

import { Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import InputError from '@/components/input-error';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useDispatch } from 'react-redux';
import { closePopup, openPopup } from '@/store/popups';

type RegisterForm = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};

interface RegisterProps {
    visible: boolean;
}

export default function RegisterPopup({ visible }: RegisterProps) {
	const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
	});

	const dispatch = useDispatch();

	const handleLogInClick = () => {
		dispatch(closePopup('register'));
		dispatch(openPopup('login'));
	}

	const submit: FormEventHandler = (e) => {
		e.preventDefault();
		post(route('register'), {
			onFinish: () => {
				dispatch(closePopup('register'));
				reset('password', 'password_confirmation');
			},
		});
	};
	return (
		<Popup name="register" visible={ visible } className="md:px-[6rem]" wrapClassName='max-w-[50rem]'>
			<h4 className="text-center mb-[3rem] sm:mb-[6rem]">Register</h4>
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-4 sm:gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Full name"
                        />
                        <InputError text={errors.name} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="email@example.com"
                        />
                        <InputError text={errors.email} />
					</div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Password"
                        />
                        <InputError text={errors.password} />
					</div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Confirm password</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Confirm password"
                        />
                        <InputError text={errors.password_confirmation} />
					</div>

                    <Button type="submit" className={cn(
						"mt-[3rem] sm:mt-[4rem] block relative",
					)} tabIndex={5} disabled={processing}>
						{processing && <LoaderCircle className="h-[1em] w-[1em] animate-spin stroke-white inline-block absolute -ml-[1.3em] top-1/2 -translate-y-1/2" />}
						Create account
					</Button>
                </div>

				<div className="text-center text-sm text-muted-foreground">
					<small>
						Already have an account?{' '}
						<Link href="#" onClick={handleLogInClick} tabIndex={6} className="pl-[0.3em]">
							Log In
						</Link>
					</small>
				</div>

            </form>
		</Popup>
	)
}