import classes from '../style/componentCss/FilmsDescription.module.css'
import { LeadMore } from './componentUI/MyButton'

export function Comm() {
  return (
    <div>
      <div className={classes.containerInfoUser}>
        <p className={classes.userImage}>
          <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 0.277344C10.08 0.277344 0 10.3573 0 22.7773C0 35.1973 10.08 45.2773 22.5 45.2773C34.92 45.2773 45 35.1973 45 22.7773C45 10.3573 34.92 0.277344 22.5 0.277344ZM22.5 9.27734C26.8425 9.27734 30.375 12.8098 30.375 17.1523C30.375 21.4948 26.8425 25.0273 22.5 25.0273C18.1575 25.0273 14.625 21.4948 14.625 17.1523C14.625 12.8098 18.1575 9.27734 22.5 9.27734ZM22.5 40.7773C17.9325 40.7773 12.5325 38.9323 8.685 34.2973C12.6261 31.2052 17.4906 29.5247 22.5 29.5247C27.5094 29.5247 32.3739 31.2052 36.315 34.2973C32.4675 38.9323 27.0675 40.7773 22.5 40.7773Z" fill="#E3DEDE"/>
          </svg>
        </p>
        <p className={classes.user}>
          Your username
        </p>
        <p>
          Звездочки
        </p>
        <p className={classes.report}>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.4775 45C10.053 44.9865 -0.00899397 34.9087 6.03286e-06 22.4842C0.00900603 10.062 10.0845 -0.00449849 22.5068 1.50813e-06C34.9313 0.00450151 45 10.0755 45 22.5C44.9932 34.9312 34.9088 45.0045 22.4775 45ZM4.50001 22.887C4.55114 27.6439 6.48326 32.1871 9.87408 35.5236C13.2649 38.8602 17.8386 40.7188 22.5957 40.6932C27.3528 40.6677 31.9063 38.76 35.261 35.3872C38.6158 32.0143 40.499 27.4506 40.499 22.6935C40.499 17.9364 38.6158 13.3727 35.261 9.99983C31.9063 6.627 27.3528 4.71933 22.5957 4.69376C17.8386 4.66819 13.2649 6.5268 9.87408 9.86337C6.48326 13.1999 4.55114 17.7431 4.50001 22.5V22.887ZM24.75 33.75H20.25V29.25H24.75V33.75ZM24.75 24.75H20.25V11.25H24.75V24.75Z" fill="#E3DEDE"/>
          </svg>
        </p>
      </div>
      <div className={classes.commBlock}>
        <p className={classes.comm}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam laudantium error exercitationem corporis, autem voluptatem earum quaerat ducimus, odio excepturi consequatur a esse repellendus tempora nobis dolores eum fugit deserunt!
        </p>
        <LeadMore>Lead more</LeadMore>
        {/* <p className={classes.more}>
          Load more
        </p> */}
      </div>
    </div>
  )
}

export function NewComm() {
  return (
    <div>
      <div className={classes.containerInfoUser}>
        <p className={classes.userImage}>
          <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 0.277344C10.08 0.277344 0 10.3573 0 22.7773C0 35.1973 10.08 45.2773 22.5 45.2773C34.92 45.2773 45 35.1973 45 22.7773C45 10.3573 34.92 0.277344 22.5 0.277344ZM22.5 9.27734C26.8425 9.27734 30.375 12.8098 30.375 17.1523C30.375 21.4948 26.8425 25.0273 22.5 25.0273C18.1575 25.0273 14.625 21.4948 14.625 17.1523C14.625 12.8098 18.1575 9.27734 22.5 9.27734ZM22.5 40.7773C17.9325 40.7773 12.5325 38.9323 8.685 34.2973C12.6261 31.2052 17.4906 29.5247 22.5 29.5247C27.5094 29.5247 32.3739 31.2052 36.315 34.2973C32.4675 38.9323 27.0675 40.7773 22.5 40.7773Z" fill="#E3DEDE"/>
          </svg>
        </p>
        <p className={classes.user}>
          Your username
        </p>
      </div>
      <p>
        {/* {RATING_FILMS.map(rate => 
          <span>
            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.4939 14.5115L30.7263 14.9837L31.247 15.0596L45.3336 17.1122C45.334 17.1123 45.3345 17.1123 45.3349 17.1124C45.7665 17.1774 46.0549 17.5745 45.9909 17.9907L45.9908 17.9907L45.9892 18.0017C45.9653 18.1696 45.8864 18.3253 45.7633 18.4467C45.763 18.447 45.7626 18.4473 45.7623 18.4477L35.57 28.4107L35.1949 28.7774L35.2834 29.2945L37.6918 43.3654L37.6919 43.3662C37.7648 43.7901 37.4806 44.1914 37.0588 44.2643L37.0573 44.2646C36.8895 44.2938 36.7167 44.2659 36.5734 44.1894L36.5689 44.1871L23.9664 37.5439L23.5001 37.298L23.0338 37.5439L10.4313 44.1871L10.4298 44.1879C10.3022 44.2554 10.1586 44.2856 10.015 44.2754C9.87147 44.2651 9.73343 44.2147 9.61656 44.1296C9.49967 44.0445 9.40857 43.928 9.35393 43.7931C9.29929 43.6581 9.28341 43.5104 9.3082 43.3667L9.30843 43.3654L11.7168 29.2945L11.8053 28.7774L11.4302 28.4107L1.23611 18.4459L1.23604 18.4458C1.088 18.3011 1.00282 18.1029 1.00007 17.8945C0.997323 17.6866 1.07678 17.4867 1.22023 17.3382C1.34126 17.215 1.49566 17.1367 1.6611 17.113L1.6635 17.1127L15.7532 15.0596L16.274 14.9837L16.5063 14.5115L22.8024 1.714C22.8027 1.71339 22.803 1.71277 22.8033 1.71216C22.9985 1.32325 23.4666 1.17015 23.8445 1.3572L23.8457 1.35777C23.997 1.43242 24.1201 1.55559 24.195 1.7083L24.1955 1.70917L30.4939 14.5115Z" stroke="#E3DEDE" stroke-width="2"/>
            </svg>
          </span>
        )} */}
      </p>
    </div>
  )
}
