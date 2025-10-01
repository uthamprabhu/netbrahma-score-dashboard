import footerLinks from '../data/footerQuickLinks.json'

const Footer = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-3 text-[14px] mt-6'>
      <div className='text-tertiary'>&copy; Copyright 2025 NetBramha Studio LLP. All Rights Reserved.</div>
      <div className='flex gap-10 decoration-1'>
        {footerLinks.map((item, id) => (
          <a key={id} href={item.path} className='!text-tertiary !underline !decoration-1 underline-offset-1'>{item.title}</a>
        ))}
      </div>
    </div>
  )
}

export default Footer