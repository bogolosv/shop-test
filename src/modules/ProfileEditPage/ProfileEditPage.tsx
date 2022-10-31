import React, {FC} from 'react';
import {PaddingBox} from "../../components/PaddingBox";
import {FlexGrid} from "../../components/FlexGrid";
import {Button} from "../../components/Button";
import {Back} from "../../components/Icons/Back";
import {RouterPath} from "../../App/const";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Label} from "../../components/Label";
import {useForm, Controller} from "react-hook-form";
import {ErrorBox} from "../../components/ErrorBox";
import {useActions} from "../../hooks/useActions";

type ProfileEditPageType = {}

export const ProfileEditPage: FC<ProfileEditPageType> = () => {
    const { editUser } = useActions();
    const { user } = useTypedSelector(state => state);
    const {
        control,
        setError,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const oldPassword = watch('oldPassword');

    const onSubmit = (data: any) => {
        editUser({
            ...user,
            name: data.name,
            password: data.newPassword,
            email: data.email,
        }, data.oldPassword, setError);
    };
    return (
        <PaddingBox small>
            <FlexGrid column spaceBetween gap='small'>
                <FlexGrid spaceBetween center>
                    <Button status='light' link to={RouterPath.PROFILE}>
                        <Back fill='none' viewBox = '0 0 7 15' width='30' height='30'/>
                    </Button>
                    <h1>Edit profile</h1>
                    <div style={{width: '60px'}}/>
                </FlexGrid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FlexGrid column gap='small'>
                        <FlexGrid column gap='tiny'>
                            <FlexGrid column gap='tiny'>
                                <Label>Name:</Label>
                                <Controller
                                    defaultValue={user.name}
                                    name="name"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => {
                                        const { onChange, value } = field;
                                        return (
                                            <input
                                                {...field}
                                                value={value}
                                                onChange={newValue => onChange(newValue.target.value)}
                                                placeholder='Input name'
                                            />
                                        )
                                    }}
                                />
                            </FlexGrid>
                            <FlexGrid column gap='tiny'>
                                <Label>E-mail:</Label>
                                <Controller
                                    defaultValue={user.email}
                                    name="email"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => {
                                        const { onChange, value } = field;
                                        return (
                                            <input
                                                {...field}
                                                value={value}
                                                onChange={newValue => onChange(newValue.target.value)}
                                                placeholder='Input e-mail'
                                            />
                                        )
                                    }}
                                />
                            </FlexGrid>
                            <FlexGrid column gap='tiny'>
                                <Label>Old password:</Label>
                                <Controller
                                    defaultValue={''}
                                    name="oldPassword"
                                    control={control}
                                    rules={{ minLength: 8, maxLength: 20 }}
                                    render={({ field }) => {
                                        const { onChange, value } = field;
                                        return (
                                            <input
                                                {...field}
                                                value={value}
                                                onChange={newValue => onChange(newValue.target.value)}
                                                placeholder='Input old password'
                                                type={"password"}
                                            />
                                        )
                                    }}
                                />
                            </FlexGrid>
                            <FlexGrid column gap='tiny'>
                                <Label>New password:</Label>
                                <Controller
                                    defaultValue={''}
                                    name="newPassword"
                                    control={control}
                                    rules={{ minLength: 8, maxLength: 20, required: !!oldPassword }}
                                    render={({ field }) => {
                                        const { onChange, value } = field;
                                        return (
                                            <input
                                                {...field}
                                                type={"password"}
                                                value={value}
                                                onChange={newValue => onChange(newValue.target.value)}
                                                placeholder='Input new password'
                                                disabled={!oldPassword}
                                            />
                                        )
                                    }}
                                />
                            </FlexGrid>
                        </FlexGrid>
                        <PaddingBox small>
                            {Object.keys(errors).map(error => {
                                // @ts-ignore
                                if(errors[error].type === "required"){
                                    return <ErrorBox key={error}>{error} is required</ErrorBox>
                                }
                                // @ts-ignore
                                if(errors[error].type === "minLength"){
                                    return <ErrorBox key={error}>{error} has to be more than 8 required</ErrorBox>
                                }
                                // @ts-ignore
                                if(errors[error].type === "maxLength"){
                                    return <ErrorBox key={error}>{error} has to be less than 20 required</ErrorBox>
                                }
                                // @ts-ignore
                                if(errors[error].type === "password"){
                                    return <ErrorBox key={error}>{error} is incorrect</ErrorBox>
                                }
                                // @ts-ignore
                                if(errors[error].type === "success"){
                                    return <ErrorBox key={error} isSuccess>SAVED</ErrorBox>
                                }
                            })}
                        </PaddingBox>
                        <PaddingBox small>
                            <Button fullSize type='submit'>
                                Save
                            </Button>
                        </PaddingBox>
                    </FlexGrid>
                </form>
            </FlexGrid>
        </PaddingBox>
    );
}