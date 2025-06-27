import Popup from '@/components/popups/popup';

import { Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useDispatch } from 'react-redux';
import { closePopup, openPopup } from '@/store/popups';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    visible: boolean;
}

export default function LoginPopup({ visible, status, canResetPassword }: LoginProps) {
	const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
		email: '',
		password: '',
		remember: false,
	});

	const dispatch = useDispatch();

	const submit: FormEventHandler = (e) => {
		e.preventDefault();
		post(route('login'), {
			onFinish: () => {
				dispatch(closePopup('login'));
				reset('password');
			},
		});
	};

	const handleSignUpClick = () => {
		dispatch(openPopup('register'));
		dispatch(closePopup('login'));
	}

	return (
		<Popup name="login" visible={ visible } className='max-w-[50rem] md:px-[6rem]'>
			<h4 className="text-center mb-[3rem] sm:mb-[6rem]">Please Log In</h4>
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-4 sm:gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="email@example.com"
                        />
                        <InputError text={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            {canResetPassword && (
                                <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={5}>
                                    Forgot password?
                                </TextLink>
                            )}
                        </div>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={2}
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Password"
                        />
                        <InputError text={errors.password} />
                    </div>

                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onClick={() => setData('remember', !data.remember)}
                            tabIndex={3}
                        />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>

                    <Button type="submit" className={cn(
						"mt-[3rem] sm:mt-[4rem] block relative",
					)} tabIndex={4} disabled={processing}>
						{processing && <LoaderCircle className="h-[1em] w-[1em] animate-spin stroke-white inline-block absolute -ml-[1.3em] top-1/2 -translate-y-1/2" />}
						Log in
					</Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    <small>
						Don't have an account?
						<Link href="#" onClick={handleSignUpClick} tabIndex={5} className="pl-[0.3em]">
							Sign up
						</Link>
					</small>
                </div>
            </form>

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}

		</Popup>
	)
}