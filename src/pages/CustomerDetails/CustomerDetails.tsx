import { useParams, useNavigate  } from 'react-router-dom';
import "./CustomerDetails.scss";
import { useQueryClient } from 'react-query';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { ICustomer } from '../../interfaces/CustomerInterface';
import Input from '../../components/Reusable/Input/Input'
import { getProvinces } from '../../utility/provinceList';
import Select from '../../components/Reusable/Select/Select';
import Button from '../../components/Reusable/Button/Button';
import { getChannels } from '../../utility/channelList';
import { getCountries } from '../../utility/countryList';
import { getErrorMessage } from '../../utility/errorProvider';
import { useEffect, useMemo } from 'react';

function CustomerDetails() {
  const { customerId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Fetch the customer list from the global query client
  const customers = useMemo(() => {
    return queryClient.getQueryData<ICustomer[]>('customerList') ?? [];
  }, [queryClient]);

  const filteredCustomer = customers.find((customer) => customer.id === Number(customerId));
  const onSubmit: SubmitHandler<ICustomer> = (data) => console.log(data)
  const provinceList = getProvinces();
  const channelList = getChannels();
  const countryList = getCountries();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<ICustomer>({
    defaultValues: {
      name: filteredCustomer?.name ?? "",
      email: filteredCustomer?.email ?? "",
      address: filteredCustomer?.address ?? "",
      postal: filteredCustomer?.postal ?? "",
      city: filteredCustomer?.city ?? "",
      province: filteredCustomer?.province ?? "",
      country: filteredCustomer?.country ?? "",
      channel: filteredCustomer?.channel ?? ""
    },
  })

  /* Temporary redirecting to home if there is no data available, ex - when reloading. Ideally,
  There should be an API to call and get specific customer data. */
  useEffect(() => {
    if (customers.length === 0) {
      navigate('/');
    }
  }, [customers, navigate]);

  if (customers.length === 0) {
    return null;
  }

  return (
    <div className='customer-details-container'>
        <h3>Customer Details</h3>
        <p>Customer details are shown below. You can Edit and save.</p>

        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
          <Controller
            name="name"
            control={control}
            rules={{ required: getErrorMessage("MANDATORY_NAME"), pattern: {value : /^(?!\s+$)[A-Za-z\s]+$/i, message: getErrorMessage("PATTERN_NAME") ?? "" }}}
            render={({ field }) => (
              <Input
                label='Name'
                name="name"
                value={field.value}
                error={errors.name && getErrorMessage("MANDATORY_NAME")}
                onChange={(e) => {
                  setValue('name', e.target.value);
                  field.onChange(e.target.value);
                }}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: getErrorMessage("MANDATORY_EMAIL"), pattern: {value : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: getErrorMessage("PATTERN_EMAIL") ?? "" }}}
            render={({ field }) => (
              <Input
                label='Email'
                name="email"
                value={field.value}
                error={errors.email && getErrorMessage("MANDATORY_EMAIL")}
                onChange={(e) => {
                  setValue('email', e.target.value);
                  field.onChange(e.target.value);
                }}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <Input
                label='Address'
                name="address"
                value={field.value}
                onChange={(e) => {
                  setValue('address', e.target.value);
                  field.onChange(e.target.value);
                }}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="postal"
            control={control}
            render={({ field }) => (
              <Input
                label='Postal Code'
                name="postal"
                value={field.value}
                onChange={(e) => {
                  setValue('postal', e.target.value);
                  field.onChange(e.target.value);
                }}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Input
                label='City'
                name="city"
                value={field.value}
                onChange={(e) => {
                  setValue('city', e.target.value);
                  field.onChange(e.target.value);
                }}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="province"
            control={control}
            render={({ field }) => <Select 
              {...field} 
              name="province"
              label='Province' defaultValue={filteredCustomer?.province} options={provinceList} ref={field.ref}
              onChange={(e) => {
                setValue('province', e.target.value);
                field.onChange(e.target.value);
              }}
            />}
          />
          <Controller
            name="country"
            control={control}
            render={({ field }) => <Select 
              disabled
              {...field} 
              name="country"
              label='Country' defaultValue={filteredCustomer?.country} options={countryList} ref={field.ref}
              onChange={(e) => {
                setValue('country', e.target.value);
                field.onChange(e.target.value);
              }}
            />}
          />
          <Controller
            name="channel"
            control={control}
            render={({ field }) => <Select
              {...field} 
              name="channel"
              label='Channel' defaultValue={filteredCustomer?.channel} options={channelList} ref={field.ref}
              onChange={(e) => {
                setValue('channel', e.target.value);
                field.onChange(e.target.value);
              }}
            />}
          />
          <Button type="submit" disabled={Object.keys(errors).length != 0} >Save</Button>
        </form>
    </div>
  );
}

export default CustomerDetails;