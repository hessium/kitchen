import { Icon } from '@/shared/ui/icon/icon';
import { cn } from '@/shared/utils/cn';

import classes from '@/components/app-footer/app-footer.module.css';

import { FooterNavigation } from '@/components/app-footer/elems/footer-navigation';
import { FooterSocials } from '@/components/app-footer/elems/footer-socials';

export const AppFooter = () => (
  <footer className={cn(classes.footer, 'bg-violet-50 p-8 md:p-10 xl:p-28')}>
    <div className='mx-auto max-w-screen-2xl items-center text-center lg:flex lg:text-left'>
      <div className='flex flex-col-reverse border-b pb-12 md:flex-row'>
        <div className='md:text-left'>
          <Icon
            className='mb-4 size-10  fill-primary hover:fill-cyan-900'
            name='common/test'
          />
          <p className='text-primary-text'>
            Takeaway & Delivery template
            <br /> for small - medium businesses.
          </p>
        </div>

        <FooterNavigation />
      </div>
      <div className='pt-8 flex-center'>
        <div className='text-sm'>
          Build by{' '}
          <a
            className='text-primary hover:text-primary-50'
            href='#'
            target='_blank'
          >
            Flowbase
          </a>{' '}
          · Powered by{' '}
          <a
            className='text-primary hover:text-primary-50'
            href='#'
            target='_blank'
          >
            Webflow
          </a>
        </div>

        <FooterSocials />
      </div>
    </div>
  </footer>
);
