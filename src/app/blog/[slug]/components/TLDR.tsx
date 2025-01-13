import { PiInfoBold } from 'react-icons/pi'

export const TLDR = ({ text }: { text: string }) => {
  return (
    <div className="!my-8 flex items-start justify-start space-x-4 rounded-md bg-gradient-to-r from-blue-200 to-blue-100 p-8 text-blue-900">
      <PiInfoBold className="h-6 w-6 flex-none" />
      <p>{text}</p>
    </div>
  )
}
