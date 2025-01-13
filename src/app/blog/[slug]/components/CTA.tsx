import Link from 'next/link'

export const CTA = () => {
  return (
    <div className="!my-16 space-y-12 rounded-md bg-gradient-to-r from-blue-900 to-blue-700 py-12 text-center text-blue-50">
      <p className="font-medium leading-tight tracking-tight sm:text-2xl">
        Organisez vos week-ends prolongés dès aujourd’hui !
      </p>

      <div>
        <Link
          className="rounded-md border-white bg-white p-4 text-lg font-medium leading-tight tracking-tight text-blue-900"
          href="/"
        >
          Accédez au calendrier des jours fériés
        </Link>
      </div>
    </div>
  )
}
