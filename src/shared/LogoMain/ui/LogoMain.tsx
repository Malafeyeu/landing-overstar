import { FC } from 'react';
import cls from './LogoMain.module.scss';

const LogoMain: FC = () => {
  return (
    <svg className={cls.header_logo} width="172" height="33" viewBox="0 0 172 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.0553 16.3588C41.0553 15.7924 41.0257 15.2318 40.9667 14.6772C40.5321 10.3345 38.4728 6.70372 35.5403 4.14096C32.834 1.73357 29.3173 0.199455 25.4112 0.0224415C21.924 -0.160473 18.3169 0.767868 15.1169 3.06118C15.109 3.06511 15.1011 3.07101 15.0952 3.07691C15.0933 3.07888 15.0913 3.08084 15.0795 3.08871C15.0756 3.09068 15.0736 3.09265 15.0736 3.09265C12.3574 5.04963 10.4575 7.62419 9.36785 10.4466C3.965 10.5528 0.373589 11.546 0.0274291 13.3575C-0.342333 15.2869 3.0524 17.7179 8.63619 19.9325C8.64406 19.9679 8.65193 20.0033 8.65979 20.0368C8.66176 20.0446 8.66373 20.0525 8.66569 20.0584C8.69716 20.2 8.73257 20.3416 8.76797 20.4832C8.7719 20.5009 8.77584 20.5167 8.78174 20.5344C8.81714 20.674 8.85648 20.8137 8.89581 20.9514C8.89974 20.9632 8.90171 20.975 8.90565 20.9868C8.99022 21.2759 9.08069 21.5611 9.181 21.8423C9.18297 21.8502 9.1869 21.8561 9.18887 21.864C9.23214 21.9859 9.27541 22.1078 9.32261 22.2278C10.3729 25.0207 12.2079 27.5697 14.814 29.5208C14.8808 29.5719 14.9497 29.6231 15.0185 29.6722C15.0638 29.7057 15.109 29.7371 15.1542 29.7706C15.2781 29.8591 15.402 29.9456 15.5279 30.0282C18.7201 32.1701 22.2682 33.004 25.6806 32.77C26.314 32.7306 26.9374 32.6559 27.5491 32.5477C29.1363 32.2665 30.6429 31.7551 32.0374 31.051C32.1829 30.9782 32.3265 30.9015 32.4701 30.8228C32.4937 30.809 32.5193 30.7972 32.5429 30.7835C32.6845 30.7048 32.8261 30.6261 32.9657 30.5435C32.9775 30.5376 32.9893 30.5298 32.9992 30.5239C33.1368 30.4432 33.2726 30.3586 33.4083 30.2741C33.4201 30.2662 33.4319 30.2603 33.4417 30.2524C33.5813 30.1639 33.721 30.0715 33.8587 29.979C33.8646 29.9751 33.8705 29.9712 33.8764 29.9672C33.8882 29.9594 33.898 29.9515 33.9098 29.9436C33.9983 29.8827 34.0849 29.8237 34.1714 29.7607C34.193 29.745 34.2147 29.7312 34.2343 29.7155C34.3209 29.6526 34.4054 29.5896 34.492 29.5267C34.5097 29.5129 34.5274 29.4991 34.5451 29.4873C34.7477 29.3339 34.9443 29.1786 35.1391 29.0153C35.1686 28.9917 35.1961 28.9661 35.2256 28.9425C35.2905 28.8875 35.3554 28.8324 35.4184 28.7773C35.4557 28.7459 35.4931 28.7124 35.5305 28.679C35.5855 28.6298 35.6406 28.5806 35.6957 28.5295C35.733 28.4961 35.7704 28.4607 35.8078 28.4253C35.8117 28.4213 35.8157 28.4174 35.8196 28.4135C35.8393 28.3958 35.8589 28.3761 35.8806 28.3584C36.7263 27.5776 37.4914 26.7043 38.1601 25.7504C44.629 25.8605 49.0504 24.8575 49.4398 22.8395C49.7997 20.9396 46.5014 18.5499 41.0553 16.3588ZM8.90958 11.8017H8.90761C8.92531 11.7447 8.94302 11.6876 8.96072 11.6306C8.94302 11.6876 8.92728 11.7447 8.90958 11.8017ZM8.44344 13.9042C8.44148 13.916 8.43951 13.9278 8.43754 13.9396C8.41591 14.0793 8.39624 14.2209 8.3805 14.3625C8.37854 14.3861 8.37461 14.4077 8.37264 14.4314C8.35494 14.573 8.3392 14.7146 8.3274 14.8562C8.3274 14.8621 8.32543 14.868 8.32543 14.8739C8.31363 15.0096 8.30183 15.1473 8.29397 15.283C8.292 15.3085 8.29003 15.3341 8.28806 15.3617C8.2802 15.4993 8.27233 15.635 8.2684 15.7727C8.26643 15.8003 8.26643 15.8298 8.26643 15.8573C8.26446 15.9183 8.2625 15.9792 8.26053 16.0402C5.7312 14.9604 4.30329 13.9396 4.45277 13.1588C4.60028 12.3957 6.23667 11.9787 8.88401 11.8981C8.6952 12.553 8.54768 13.2218 8.44344 13.9042ZM40.9884 17.893C43.8875 19.0652 45.5573 20.1823 45.396 21.0222C45.2328 21.8758 43.205 22.2967 39.9873 22.2986C40.5085 20.9297 40.8546 19.4566 40.9884 17.893ZM1.97261 13.3653C2.30697 11.6267 5.97115 11.1291 9.15346 11.0288C9.10823 11.1586 9.06693 11.2884 9.02562 11.4202C4.99364 11.5618 2.57249 12.2895 2.35221 13.4381C2.12209 14.6379 4.28756 16.2979 8.292 17.9972C8.30577 18.0031 8.31757 18.007 8.33133 18.0129C8.33133 18.0129 8.33134 18.0129 8.3333 18.0129C8.3392 18.066 8.34314 18.1191 8.34904 18.1722C8.35887 18.2647 8.37067 18.3591 8.3805 18.4515C8.29987 18.4181 8.22119 18.3847 8.14252 18.3512C5.13526 17.0787 1.62449 15.1787 1.97261 13.3653ZM48.2636 22.2534C47.9155 24.0668 43.9504 24.531 40.6855 24.5998C40.3649 24.6057 40.0345 24.6096 39.7021 24.6096C39.4346 24.6096 39.1632 24.6077 38.8898 24.6037C38.9626 24.4779 39.0353 24.348 39.1061 24.2202C39.647 24.2281 40.1721 24.2261 40.6796 24.2143C45.0302 24.1199 47.6559 23.3784 47.886 22.1806C48.1161 20.9809 45.9507 19.3209 41.9443 17.6215C41.6492 17.4957 41.3444 17.3717 41.0336 17.2478C41.0336 17.2282 41.0356 17.2065 41.0356 17.1869C41.0415 17.0708 41.0454 16.9528 41.0494 16.8368C41.4073 16.9784 41.7554 17.122 42.0957 17.2655C45.101 18.54 48.6118 20.44 48.2636 22.2534Z" fill="url(#paint0_radial_44_641)"/>
      <path d="M37.7392 16.4061C37.7392 26.9423 25.9541 33.0119 17.3945 27.2649C9.83992 22.1964 9.63537 11.1271 17.0345 5.79705C17.0345 5.79705 17.0365 5.79508 17.0404 5.79311C17.0503 5.78721 17.0503 5.78525 17.0522 5.78328C17.0581 5.77738 17.064 5.77345 17.0699 5.77148C25.5823 -0.329591 37.7392 5.68101 37.7392 16.4061Z" fill="url(#paint1_linear_44_641)"/>
      <path d="M17.0692 5.77148C17.0597 5.77911 17.052 5.78292 17.0482 5.78674C17.052 5.78292 17.0616 5.7753 17.0692 5.77148Z" fill="url(#paint2_linear_44_641)"/>
      <path d="M37.6427 17.9913C37.7017 17.415 38.1738 10.9344 30.3203 6.60345C22.4943 2.28825 17.534 5.45483 17.0698 5.77148C19.2117 4.23737 21.8354 3.33459 24.6696 3.33459C32.529 3.33656 38.5947 10.2244 37.6427 17.9913Z" fill="url(#paint3_linear_44_641)"/>
      <path d="M38.4472 17.3757C38.2112 17.2754 37.9693 17.1751 37.7215 17.0768C37.7136 17.2498 37.6998 17.419 37.6861 17.5901C39.9971 18.5243 41.3286 19.4153 41.2008 20.084C41.071 20.7665 39.4464 21.1009 36.8698 21.1009C33.7682 21.1009 29.2858 20.617 24.3628 19.673C19.078 18.6581 14.4619 17.3383 11.6041 16.115C9.59007 15.2535 8.44931 14.4412 8.56929 13.8197C8.68533 13.21 9.9913 12.8796 12.0997 12.8147C12.1076 12.7871 12.1135 12.7616 12.1214 12.736C12.1509 12.6337 12.1823 12.5334 12.2138 12.4331C9.00199 12.5452 7.07057 13.1274 6.89553 14.042C6.71261 14.9978 8.43751 16.3215 11.6297 17.6747C11.6395 17.6786 11.6513 17.6825 11.6611 17.6884C14.9614 19.0829 19.4537 20.3653 24.3156 21.2995C28.6308 22.1275 32.7769 22.5937 36.1618 22.635C36.6023 22.6409 37.0291 22.6389 37.4402 22.6311C40.9057 22.5563 43.0004 21.9643 43.1833 21.0104C43.3662 20.0526 41.6413 18.7289 38.4472 17.3757Z" fill="url(#paint4_linear_44_641)"/>
      <path d="M37.7392 16.3687V16.4061C37.7392 16.5221 37.7372 16.6362 37.7352 16.7522C38.0204 16.8643 38.2997 16.9784 38.5692 17.0945C40.9647 18.1093 43.7635 19.6238 43.4862 21.0674C43.2089 22.5111 40.0482 22.8808 37.4481 22.9379C37.1924 22.9438 36.9308 22.9457 36.6633 22.9457C36.443 22.9457 36.2188 22.9438 35.9907 22.9398C32.6195 22.8828 28.5187 22.4186 24.2566 21.6004C19.4517 20.678 15.0047 19.4153 11.7005 18.0385C11.6355 18.011 11.5726 17.9854 11.5097 17.9579C9.11409 16.943 6.31531 15.4286 6.59263 13.9849C6.85815 12.5983 9.78084 12.203 12.318 12.1223C12.3711 11.967 12.4282 11.8116 12.4891 11.6582C8.18182 11.7427 5.3201 12.5354 5.04278 13.9771C4.74775 15.5151 7.45409 17.4524 11.903 19.2167C15.1188 20.4912 19.2471 21.6752 23.8102 22.5524C28.0703 23.3706 32.0787 23.7974 35.4085 23.8564C40.5753 23.9468 44.1097 23.1483 44.4185 21.5375C44.7076 20.0191 42.0799 18.1133 37.7392 16.3687Z" fill="url(#paint5_linear_44_641)"/>
      <path d="M54.6986 25.4041L49.2746 12.4921H53.1386L57.6506 23.6041H55.7306L60.4106 12.4921H64.0106L58.5626 25.4041H54.6986ZM74.5947 25.5961C73.1227 25.5961 71.8267 25.3081 70.7067 24.7321C69.6027 24.1561 68.7467 23.3721 68.1387 22.3801C67.5307 21.3721 67.2267 20.2281 67.2267 18.9481C67.2267 17.6521 67.5227 16.5081 68.1147 15.5161C68.7227 14.5081 69.5467 13.7241 70.5867 13.1641C71.6267 12.5881 72.8027 12.3001 74.1147 12.3001C75.3787 12.3001 76.5147 12.5721 77.5227 13.1161C78.5467 13.6441 79.3547 14.4121 79.9467 15.4201C80.5387 16.4121 80.8347 17.6041 80.8347 18.9961C80.8347 19.1401 80.8267 19.3081 80.8107 19.5001C80.7947 19.6761 80.7787 19.8441 80.7627 20.0041H70.2747V17.8201H78.7947L77.3547 18.4681C77.3547 17.7961 77.2187 17.2121 76.9467 16.7161C76.6747 16.2201 76.2987 15.8361 75.8187 15.5641C75.3387 15.2761 74.7787 15.1321 74.1387 15.1321C73.4987 15.1321 72.9307 15.2761 72.4347 15.5641C71.9547 15.8361 71.5787 16.2281 71.3067 16.7401C71.0347 17.2361 70.8987 17.8281 70.8987 18.5161V19.0921C70.8987 19.7961 71.0507 20.4201 71.3547 20.9641C71.6747 21.4921 72.1147 21.9001 72.6747 22.1881C73.2507 22.4601 73.9227 22.5961 74.6907 22.5961C75.3787 22.5961 75.9787 22.4921 76.4907 22.2841C77.0187 22.0761 77.4987 21.7641 77.9307 21.3481L79.9227 23.5081C79.3307 24.1801 78.5867 24.7001 77.6907 25.0681C76.7947 25.4201 75.7627 25.5961 74.5947 25.5961ZM86.3274 25.4041V12.4921H89.9034V16.1401L89.3994 15.0841C89.7834 14.1721 90.3994 13.4841 91.2474 13.0201C92.0954 12.5401 93.1274 12.3001 94.3434 12.3001V15.7561C94.1834 15.7401 94.0394 15.7321 93.9114 15.7321C93.7834 15.7161 93.6474 15.7081 93.5034 15.7081C92.4794 15.7081 91.6474 16.0041 91.0074 16.5961C90.3834 17.1721 90.0714 18.0761 90.0714 19.3081V25.4041H86.3274ZM104.007 25.5961C102.903 25.5961 101.839 25.4681 100.815 25.2121C99.8073 24.9401 99.0073 24.6041 98.4153 24.2041L99.6633 21.5161C100.255 21.8841 100.951 22.1881 101.751 22.4281C102.567 22.6521 103.367 22.7641 104.151 22.7641C105.015 22.7641 105.623 22.6601 105.975 22.4521C106.343 22.2441 106.527 21.9561 106.527 21.5881C106.527 21.2841 106.383 21.0601 106.095 20.9161C105.823 20.7561 105.455 20.6361 104.991 20.5561C104.527 20.4761 104.015 20.3961 103.455 20.3161C102.911 20.2361 102.359 20.1321 101.799 20.0041C101.239 19.8601 100.727 19.6521 100.263 19.3801C99.7993 19.1081 99.4233 18.7401 99.1353 18.2761C98.8633 17.8121 98.7273 17.2121 98.7273 16.4761C98.7273 15.6601 98.9593 14.9401 99.4233 14.3161C99.9033 13.6921 100.591 13.2041 101.487 12.8521C102.383 12.4841 103.455 12.3001 104.703 12.3001C105.583 12.3001 106.479 12.3961 107.391 12.5881C108.303 12.7801 109.063 13.0601 109.671 13.4281L108.423 16.0921C107.799 15.7241 107.167 15.4761 106.527 15.3481C105.903 15.2041 105.295 15.1321 104.703 15.1321C103.871 15.1321 103.263 15.2441 102.879 15.4681C102.495 15.6921 102.303 15.9801 102.303 16.3321C102.303 16.6521 102.439 16.8921 102.711 17.0521C102.999 17.2121 103.375 17.3401 103.839 17.4361C104.303 17.5321 104.807 17.6201 105.351 17.7001C105.911 17.7641 106.471 17.8681 107.031 18.0121C107.591 18.1561 108.095 18.3641 108.543 18.6361C109.007 18.8921 109.383 19.2521 109.671 19.7161C109.959 20.1641 110.103 20.7561 110.103 21.4921C110.103 22.2921 109.863 23.0041 109.383 23.6281C108.903 24.2361 108.207 24.7161 107.295 25.0681C106.399 25.4201 105.303 25.5961 104.007 25.5961ZM120.693 25.5961C119.173 25.5961 117.989 25.2121 117.141 24.4441C116.293 23.6601 115.869 22.5001 115.869 20.9641V9.63605H119.613V20.9161C119.613 21.4601 119.757 21.8841 120.045 22.1881C120.333 22.4761 120.725 22.6201 121.221 22.6201C121.813 22.6201 122.317 22.4601 122.733 22.1401L123.741 24.7801C123.357 25.0521 122.893 25.2601 122.349 25.4041C121.821 25.5321 121.269 25.5961 120.693 25.5961ZM113.877 15.6601V12.7801H122.829V15.6601H113.877ZM136.763 25.4041V22.8841L136.523 22.3321V17.8201C136.523 17.0201 136.275 16.3961 135.779 15.9481C135.299 15.5001 134.555 15.2761 133.547 15.2761C132.859 15.2761 132.179 15.3881 131.507 15.6121C130.851 15.8201 130.291 16.1081 129.827 16.4761L128.483 13.8601C129.187 13.3641 130.035 12.9801 131.027 12.7081C132.019 12.4361 133.027 12.3001 134.051 12.3001C136.019 12.3001 137.547 12.7641 138.635 13.6921C139.723 14.6201 140.267 16.0681 140.267 18.0361V25.4041H136.763ZM132.827 25.5961C131.819 25.5961 130.955 25.4281 130.235 25.0921C129.515 24.7401 128.963 24.2681 128.579 23.6761C128.195 23.0841 128.003 22.4201 128.003 21.6841C128.003 20.9161 128.187 20.2441 128.555 19.6681C128.939 19.0921 129.539 18.6441 130.355 18.3241C131.171 17.9881 132.235 17.8201 133.547 17.8201H136.979V20.0041H133.955C133.075 20.0041 132.467 20.1481 132.131 20.4361C131.811 20.7241 131.651 21.0841 131.651 21.5161C131.651 21.9961 131.835 22.3801 132.203 22.6681C132.587 22.9401 133.107 23.0761 133.763 23.0761C134.387 23.0761 134.947 22.9321 135.443 22.6441C135.939 22.3401 136.299 21.9001 136.523 21.3241L137.099 23.0521C136.827 23.8841 136.331 24.5161 135.611 24.9481C134.891 25.3801 133.963 25.5961 132.827 25.5961ZM146.655 25.4041V12.4921H150.231V16.1401L149.727 15.0841C150.111 14.1721 150.727 13.4841 151.575 13.0201C152.423 12.5401 153.455 12.3001 154.671 12.3001V15.7561C154.511 15.7401 154.367 15.7321 154.239 15.7321C154.111 15.7161 153.975 15.7081 153.831 15.7081C152.807 15.7081 151.975 16.0041 151.335 16.5961C150.711 17.1721 150.399 18.0761 150.399 19.3081V25.4041H146.655ZM164.335 25.5961C163.231 25.5961 162.167 25.4681 161.143 25.2121C160.135 24.9401 159.335 24.6041 158.743 24.2041L159.991 21.5161C160.583 21.8841 161.279 22.1881 162.079 22.4281C162.895 22.6521 163.695 22.7641 164.479 22.7641C165.343 22.7641 165.951 22.6601 166.303 22.4521C166.671 22.2441 166.855 21.9561 166.855 21.5881C166.855 21.2841 166.711 21.0601 166.423 20.9161C166.151 20.7561 165.783 20.6361 165.319 20.5561C164.855 20.4761 164.343 20.3961 163.783 20.3161C163.239 20.2361 162.687 20.1321 162.127 20.0041C161.567 19.8601 161.055 19.6521 160.591 19.3801C160.127 19.1081 159.751 18.7401 159.463 18.2761C159.191 17.8121 159.055 17.2121 159.055 16.4761C159.055 15.6601 159.287 14.9401 159.751 14.3161C160.231 13.6921 160.919 13.2041 161.815 12.8521C162.711 12.4841 163.783 12.3001 165.031 12.3001C165.911 12.3001 166.807 12.3961 167.719 12.5881C168.631 12.7801 169.391 13.0601 169.999 13.4281L168.751 16.0921C168.127 15.7241 167.495 15.4761 166.855 15.3481C166.231 15.2041 165.623 15.1321 165.031 15.1321C164.199 15.1321 163.591 15.2441 163.207 15.4681C162.823 15.6921 162.631 15.9801 162.631 16.3321C162.631 16.6521 162.767 16.8921 163.039 17.0521C163.327 17.2121 163.703 17.3401 164.167 17.4361C164.631 17.5321 165.135 17.6201 165.679 17.7001C166.239 17.7641 166.799 17.8681 167.359 18.0121C167.919 18.1561 168.423 18.3641 168.871 18.6361C169.335 18.8921 169.711 19.2521 169.999 19.7161C170.287 20.1641 170.431 20.7561 170.431 21.4921C170.431 22.2921 170.191 23.0041 169.711 23.6281C169.231 24.2361 168.535 24.7161 167.623 25.0681C166.727 25.4201 165.631 25.5961 164.335 25.5961Z" fill="white"/>
      <defs>
      <radialGradient id="paint0_radial_44_641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.7298 16.406) scale(15.2387)">
      <stop stopColor="#6663F9"/>
      <stop offset="1" stopColor="#AA9CFF" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="paint1_linear_44_641" x1="13" y1="10" x2="38" y2="17.5" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FF1D1D"/>
      <stop offset="0.244792"/>
      </linearGradient>
      <linearGradient id="paint2_linear_44_641" x1="17.0688" y1="5.76435" x2="17.0475" y2="5.79416" gradientUnits="userSpaceOnUse">
      <stop stopColor="#D2D1FA"/>
      <stop offset="1" stopColor="#F9DDF9" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint3_linear_44_641" x1="34.979" y1="1.18933" x2="29.2748" y2="9.18963" gradientUnits="userSpaceOnUse">
      <stop stopColor="#D1D3FA"/>
      <stop offset="1" stopColor="#F9DDF9" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint4_linear_44_641" x1="23.0935" y1="24.406" x2="26.2456" y2="13.2585" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FF0000"/>
      <stop offset="1" stopColor="#0500FF"/>
      </linearGradient>
      <linearGradient id="paint5_linear_44_641" x1="22.6182" y1="25.9773" x2="26.7068" y2="12.8531" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FF0000"/>
      <stop offset="1" stopColor="#0500FF"/>
      </linearGradient>
      </defs>
    </svg>
  )
}

export default LogoMain;