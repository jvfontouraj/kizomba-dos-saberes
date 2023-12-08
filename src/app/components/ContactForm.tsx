import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { useToast } from '@/app/components/ui/use-toast'

export function ContactForm() {
  const { toast } = useToast()
  const formSchema = z.object({
    name: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
    phone: z
      .string()
      .regex(
        /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[0-9])[0-9]{3}-[0-9]{4}$/,
        'Número inválido. Ex: (99) 99999-9999',
      ),
    email: z.string().email({ message: 'Email inválido' }),
    text: z.string().min(10, { message: 'Mínimo de 10 caracteres' }),
  })

  type FormSchema = z.infer<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormSchema> = (data: FormSchema) => {
    const templateParams = {
      sender_name: data.name,
      sender_phone: data.phone,
      sender_email: data.email,
      sender_text: data.text,
    }
    emailjs
      .send(
        'service_jlnus8o',
        'template_c0bi3di',
        templateParams,
        'z15D1fmRGoZgLWTIj',
      )
      .then(
        (response) => {
          toast({
            title: 'Sucesso!',
            description:
              'Obrigado pelo contato! Retornaremos com uma reposta o mais breve possível.',
          })
          console.log('Email enviado', response.status, response.text)
        },
        (err) => {
          toast({
            variant: 'destructive',
            title: 'Erro!',
            description:
              'Ocorreu um erro ao enviar sua mensagem, tente novamente ou entre em contato pelo email: kizombadosaberes@gmail.com',
          })
          console.log('Email não enviado', err)
        },
      )
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10 w-1/2"
    >
      <h2 className="font-londrinaSolid text-4xl uppercase leading-none text-[#e7c102]">
        Fale Conosco!
      </h2>
      <div>
        <div className="relative w-3/4 h-fit">
          <input
            {...register('name')}
            type="text"
            className="w-full relative z-10 bg-[#a79280] text-neutral-50 placeholder:text-neutral-50 p-2"
            placeholder="Nome"
          />
          <div className="absolute right-0 top-0 w-[calc(100%+1px)] h-[calc(100%+1px)] bg-gradient-to-tr from-[#e7c102] to-transparent to-70%" />
        </div>
        {errors.name && (
          <span className="text-red-700">{errors.name.message}</span>
        )}
      </div>
      <div>
        <div className="relative w-3/4 h-fit">
          <input
            {...register('phone')}
            type="text"
            className="w-full relative z-10 bg-[#a79280] text-neutral-50 placeholder:text-neutral-50 p-2"
            placeholder="Telefone"
          />
          <div className="absolute right-0 top-0 w-[calc(100%+1px)] h-[calc(100%+1px)] bg-gradient-to-tr from-[#e7c102] to-transparent to-70%" />
        </div>
        {errors.phone && (
          <span className="text-red-700">{errors.phone.message}</span>
        )}
      </div>

      <div>
        <div className="relative w-3/4 h-fit">
          <input
            {...register('email')}
            type="text"
            className="w-full relative z-10 bg-[#a79280] text-neutral-50 placeholder:text-neutral-50 p-2"
            placeholder="E-mail"
          />
          <div className="absolute right-0 top-0 w-[calc(100%+1px)] h-[calc(100%+1px)] bg-gradient-to-tr from-[#e7c102] to-transparent to-70%" />
        </div>
        {errors.email && (
          <span className="text-red-700">{errors.email.message}</span>
        )}
      </div>
      <div>
        <div className="relative w-3/4 h-40">
          <textarea
            {...register('text')}
            className="resize-none w-full h-full relative z-10 bg-[#a79280] text-neutral-50 placeholder:text-neutral-50 p-2"
            placeholder="Digite aqui sua mensagem..."
          />
          <div className="absolute right-0 top-0 w-[calc(100%+1px)] h-[calc(100%+1px)] bg-gradient-to-tr from-[#e7c102] to-transparent to-70%" />
        </div>
        {errors.text && (
          <span className="text-red-700">{errors.text.message}</span>
        )}
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="px-7 py-2 font-bold font-londrinaSolid text-2xl rounded-lg bg-[#e7c102] uppercase w-fit text-[#0073a8ff] disabled:bg-[#e7c102]/50 disabled:text-[#0073a8ff]/50 disabled:cursor-not-allowed"
      >
        Enviar
      </button>
    </form>
  )
}
