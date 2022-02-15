const secondBlobInitX = -100;
const secondBlobInitY = 0;
const secondBlobSizeFactor = 0.9;
const secondBlobInitSize = 1440;
const paths = [
    "M2155.71,2458.77c-6.62-66-34.31-136.25-59.49-197.58l-28.14-68.55c-7-17.17-14.23-34.57-25.54-49.29-8.24-10.73-18.49-19.78-26.87-30.4-13-16.49-21.07-36.2-30.56-54.92-50.47-99.55-141.07-171.62-228.94-240.43,21.57-21.86,8-61.37-17.05-79.09s-57.08-21.32-86.5-30.11a243.25,243.25,0,0,1-83.66-44.24c-10-8.15-19.65-17.26-31.64-22s-27.36-4-35.87,5.65c-17-52.58-103.16-53.17-122.24-105-5.46-14.83-5.46-33.74-18.73-42.33-12.6-8.16-29.1-1.6-44.12-1.59-23.71,0-44.34-17.17-57.24-37.07s-20.17-42.88-31.34-63.79c-25.93-48.55-73.78-84.82-127.52-96.68-1.21-29.22-3.65-54.66-3.57-83.91,8.75,12.63,31.92,9.52,37-5,1.5-4.26,1.61-9,3.47-13.08s5.53-7.47,8.8-10.81c12.81-13.08,21.57-29.52,29.75-45.91a1135.48,1135.48,0,0,0,46-105.07c8.4-22.16,16.23-45.65,13-69.13s-21.11-46.62-44.77-47.94c-14-.78-27.75,5.9-41.59,3.92,17.09-70.74-6.55-143.56-31.55-211.9-33.37-91.19-76.79-182.86-151.9-244.4-39.36-32.25-85.94-54.84-134.2-71a511.84,511.84,0,0,0-54.91-15.19,449.32,449.32,0,0,0-192.35,1c-15.84,3.57-31.75,8-48,7.41a543.08,543.08,0,0,1-104.08,73c-7.06,3.81-14.4,7.6-19.59,13.71-7.06,8.33-10,20.66-19.63,25.71a33.16,33.16,0,0,0,10.58,13c-27,13.87-17.39,53.68-21.52,83.73-2.71,19.68-12.89,37.39-21.6,55.25-43.39,88.92-52.88,193.89-26.14,289.15,3,10.74,6.5,21.79,5,32.84s-9.92,22.08-21.07,22.43a1464.48,1464.48,0,0,0,85.52,372.65c15.48,41.55,33.46,83.36,63.87,115.62,12.05,12.79,32.13,19.08,28,36.15-7,28.89-14.42,58.73-32.59,82.26-16.64,21.56-40.73,35.79-63.54,50.66a832.82,832.82,0,0,0-140.9,115.69c-8.55,8.76-17.09,17.84-27.83,23.71-9,4.92-19.14,7.33-28.64,11.21-26.62,10.89-47,32.65-67.51,52.78-13.71,13.43-29,27-47.9,30.34-9.63,1.72-19.61.64-29.22,2.51-29.12,5.64-46,35-66.42,56.53-42.48,44.76-110.75,61.79-145,113.15-23.56,35.34-26.23,80.14-28.16,122.58l-6.12,134.79-1.55,34.08-4.76,104.91",
    "M1909.75,2407.37a1890,1890,0,0,0-33.16-238.28c-3.46-16.9-7.19-33.94-14.59-49.52s-18.88-29.8-34.38-37.38c-3.42-1.67-7.13-3.09-9.73-5.88-2.06-2.19-3.24-5-4.42-7.8-11.42-26.68-23.58-54.31-44.58-74.34a538.25,538.25,0,0,0-71.17-57.18c-13.57-9.13-29.63-18-45.46-13.9-6,1.55-11.48,4.9-17.6,5.73-5.6.75-11.23-.66-16.75-1.9a274.54,274.54,0,0,0-107.38-2.44c-7.23,1.27-14.86,2.81-21.73.23-5.33-2-9.47-6.21-13.48-10.25a602,602,0,0,0-135.46-102.3c-20.09-11.11-41.39-21.23-64.24-23.42-34-34.43-68.66-70.34-106.48-100.53,1.66-35.18,5.26-73.31,6.92-108.5,24.32-36.67,41.08-77.74,57.68-118.5,5.88-14.43,11.76-28.88,16.68-43.67,17.1-51.35,26.37-105.19,19.26-158.84,7.78-1.2,13.19-8.19,17.36-14.87a202,202,0,0,0,30.29-98.78c.75-20.09-1.52-40.31,1-60.25,3.42-26.86,15.42-52.16,18-79.12,1-10.64-2.36-24.7-13-25.58-.44-13,10.8-23.69,12.23-36.59.74-6.68-1.23-13.33-3.18-19.76-6.42-21.19-13-41.18-19.45-62.38,34.77-6.67,71.34-14.2,97.9-37.62,25.64-22.6,38.12-57.5,39.21-91.66s-8.13-67.86-20.14-99.86c-6.18-16.48-14.11-33.82-29.42-42.49-10.22-5.78-22.34-6.85-33.67-9.94-35.48-9.67-63.78-41.69-69-78.1a12.53,12.53,0,0,0-11.88-22.06,59.89,59.89,0,0,0,15.78-48.91c.88,15.51-13.81,28.51-29.16,30.87s-30.76-3.29-44.8-9.93-27.89-14.47-43.24-16.88c-10.31-1.61-21-.71-31.08-3.34-14-3.65-25.32-13.6-37.31-21.7a159.66,159.66,0,0,0-85.7-27.15c-20.69-.4-42,3.52-59.26,15s-29.69,31.28-28.68,51.95C927.57,438.09,909.55,428,891.06,431c-27.47,4.47-41.92,34.28-51.9,60.27l-10.61,3.5c-7.54-13.52-23.8-20.32-39.27-20.54s-30.45,5.06-44.89,10.64A922.93,922.93,0,0,0,589.7,562c-27.52-51.65-94-69.09-152.45-66.14-31.73,1.6-63.94,7.88-91.18,24.24C285.67,556.37,262.71,634.81,268.5,705c-10.12,2.21-20.87,4.75-28.08,12.18s-8.51,21.5.13,27.22c7,4.62,16.28,1.78,24.11-1.19-8.09,9.55-22.69,8.58-34.94,11.11-34.05,7-53.43,52.25-35,81.76,8.68,13.94,23.13,23.15,34.08,35.39a87.87,87.87,0,0,1,19.44,36.19l31.24-19.92c3.18-2,6.6-4.12,10.36-4.06,8.9.15,12.95,11.64,11.64,20.44s-5.44,17.65-3.1,26.23c13.52-1,23.94,11.16,31.89,22.15l45.85,63.33c8.4,11.6,20.07,24.61,34.14,21.93,2.56-.49,5.3-1.48,7.65-.37s3.39,4,4.1,6.58a559.31,559.31,0,0,1,17.68,97c-1.65,4.16,5,8.35,8.06,5.06-1.68,12.24,3,24.36,7.54,35.85Q470,1219,484.77,1256.15c2.34,5.87,4.69,11.78,8.13,17.07,3.05,4.7,6.9,8.82,10.17,13.37,9.63,13.46,13.81,30.19,23.26,43.78s28.19,23.68,42.41,15.22c1.71,30.16,15.67,59.64,26.85,87.71q6.54,16.44,13.1,32.9c3.21,8.07,6.44,16.17,10.73,23.73a95.12,95.12,0,0,0,19.77,24.29c1.07,33.67,1.94,68.91,3,102.57-4.11-2.22-7.72-1.31-12.4-1.24a1104.66,1104.66,0,0,0-150.32,12.51c-5.05.77-10.18,1.6-14.73,3.92-12.08,6.17-16.73,20.64-24,32.1-5,7.88-11.57,14.63-18.08,21.32L307.41,1803.67c-22.16,22.74-44.37,45.53-63.88,70.57-11.18,14.33-25.28,33.21-22.23,51.12l-63.59,56.47c-17.15,15.24-35,30.87-56.83,37.86-29,9.27-63.9,3.1-87.23,22.62-8.42,7-14.38,16.86-23.52,23-15.12,10.09-34.95,7.73-52.95,10.32-30.75,4.41-57.66,24.27-76.65,48.86s-31,53.75-41.9,82.86c-24.26,65-40.51,130.84-44.61,200.06",
    "M-137.23,2381.1c-4-34.91,46-345.41,56.11-379.06,2.08-6.94,3.68-14.2,7.69-20.23,3.9-5.86,9.75-10.08,15.5-14.14A2006,2006,0,0,1,281.84,1774.3c11.39-5.08,23.14-10.26,31.9-19.15,4.63-4.71,8.27-10.29,12.53-15.33,21.71-25.63,56.71-34.35,88.06-46.38,59.73-22.91,116.2-63.64,167.45-101.92-12.93-31.89-26.65-63.55-43.67-93.46-33.17-58.28-78.85-109.91-102.49-172.66-28.65-76.06-19.09-160.36-7.3-240.78a73.39,73.39,0,0,1-35.16-46.5c-3.49-14.67-2.32-30-1.13-45,3.41-43.2,6.83-86.45,13.76-129.22,2.24-13.82,4.85-27.66,5-41.66.12-12-1.57-24-2-36-1-30.29,6.11-60.21,13.83-89.51l-18.25,34a186.84,186.84,0,0,1,16.42-66.09c2.5.52-.56,4.8-2.63,3.28s-1.6-4.68-.85-7.13a119.44,119.44,0,0,1,32.93-52.34A73.74,73.74,0,0,0,426.62,625,263.06,263.06,0,0,1,508,533.63c5.14-3.57,10.85-7.62,12-13.77.63-3.34-.22-6.91.89-10.12,1.64-4.76,6.91-7.13,10-11.07s1.5-12.1-3.4-11a632.52,632.52,0,0,1,151-91.22c26.12-11.14,57.92-11.47,85.92-16.18-3.4.85-4.65-5.25-1.73-7.21s6.81-.86,10.14.26a458.81,458.81,0,0,0,126.75,23.49c25.23,1.06,51.06.12,75,8,19.24,6.32,39.57,18.24,58.28,10.5L1031,427.39c1.32-3.59,7.28-2.25,8.92,1.2s.74,7.52.88,11.34c.51,13.82,15.3,23.58,29.12,23.69s26.63-6.7,38.76-13.33l-23.63,19.22a53,53,0,0,1,47.37,17.13l-12.59,1.72c23.26,3.48,41.14,21.75,56.85,39.26q39.79,44.36,77,91c5.31,6.64,10.67,13.52,13.23,21.62,2,6.27,2.18,12.94,2.32,19.5a1765.6,1765.6,0,0,1-10,228.77c-2.82,25.93-18.1,68.28-5.75,92.21,7.47,14.47,18.23,25.2,23.73,41.25,5.4,15.77,7.94,32.49,8.69,49.1,2.08,46-8.65,92.3-29.69,133.17-16.62,32.28-49.35,91.88-93.92,77.45-3.63,85.11,6.7,171.26,27.74,253.8,10.41,4.23,16.49-14.66,27.65-16,3.1-.38,6.18.71,9.1,1.84,52.08,20.16,95.66,56.9,141.93,88.18,88.13,59.59,237.94,100.4,325.34,161.06,8.6,6,17.35,12.43,22.38,21.61,4.52,8.26,5.59,17.92,6.5,27.29,6.91,70.55,194.1,509.8,218.89,576.21",
    "M1682.66,2604.78c28.85-40.87,15-97.06,25.18-146,7.11-34.21,26.1-64.74,36.57-98.07,20.15-64.13,7.64-133.44,12-200.52,4.31-65.84,24.9-133.15,6.2-196.43-13.77-46.56-49.32-86.17-94.12-104.88-20.23-8.45-42-12.78-62.23-21.22-21.74-9.07-41.22-22.66-61.13-35.25q-31.42-19.87-64.69-36.64a351.61,351.61,0,0,0-93.87-81.36c-12.76-7.58-30.68-13.77-41-3.11-13.8-12.45-31.24-23.12-44.17-36.46-36.89-38.08-78.53-76.11-105.19-122.38-26.29-45.63-40.42-98.41-39.19-151.15,13.31-4.31,26.72-3.93,40.55-1.81l3.92-4a59.22,59.22,0,0,0,13.82-2.39,156.41,156.41,0,0,0,70.71-41.58l5.64,4.83a43,43,0,0,1,29.8-11.34,195.12,195.12,0,0,0,36.58-127.72c-2.36-32.7-13-64.43-14.74-97.16-.91-17,.6-34,2.11-51q2.5-28.25,5-56.49c3-33.21-9.61-62.78-17.08-94.17s-14.55-62.7-23-93.77c-16.77-61.71-37.9-122.74-69.91-178.35-50.59-87.91-133.59-162.88-233.8-178.57-20.09-3.15-40.47-3.89-60.79-4.62l-112.08-4c-15.46-.56-32.5-.6-44.31,9.4C730.14,427,666.6,442.92,618.41,479c-12.28,9.2-21.94,22.19-34.38,30.82-10,7-21.64,11-31.77,18.34a433.43,433.43,0,0,0-73.19,66.71c-22.5,25.81-42.09,54.49-55,86.2-24.64,60.41-23.82,127.75-22.63,193q2.11,116.08,4.24,232.15c.77,42.46,1.52,85.29-6.58,127s-25.83,82.69-56.95,111.59c9.89,2.09,18.19-1.44,26.9-6.56a84.71,84.71,0,0,1-23.92,34.63,57.29,57.29,0,0,0,46.45-8.53,29.45,29.45,0,0,1-2.9,14.68l14.28-3.4c-.75,6,7.17,9.44,13.09,8.27s11.32-4.84,17.36-4.8c8.65.07,15.19,7.48,22.77,11.66s20.57,2.07,20.32-6.58c3.49,2,4.83,6.27,6.72,9.83,8.58,16.16,29.9,19.45,48.14,20.8,17.36,1.29,35.4,2.75,50.46,11.47,24,13.88,34.57,42.34,52,63.89,16.35,20.26,43,35,68.37,40.83,12,17.84,5.35,43.29-9.34,59s-35.45,24-55.49,31.75l-92.49,35.92c-82.43,32-165.31,64.18-251.82,82.52-21.79,4.62-43.92,8.4-64.62,16.61-23.56,9.35-44.53,24.16-64.71,39.49-58.37,44.35-114,96.6-142.42,164.17C5.3,1998.34-1.34,2039.4-7.85,2080c-12.07,75.31-45,358.39-57.12,433.7",
    "M138,3226.39c14.9-12.82,11.91-39.59,34.77-47.15,14,11.77,6.14,30.54,19.62,44.06,11.63,5.15,26.78,1.46,41.43.84q271-11.47,542-23.51l681.63-29.77,46-2c8.13-22.23,1.77-42.64,2.45-62.5.66-19,1.8-37.65,6.37-54.41,10.47-3.65,12.35,2.14,14,7,9.12,27.24,17.85,54.62,27,81.86,2.53,7.57,5.91,14.85,8.5,21.28,33.75,3.71,314.31-7.25,371.6-14.28,6-10.77-.62-20.44-4.34-29.92-18.46-47.19-36-94.59-47.21-144.18-9.41-41.81-13-83.86-6.74-126.35,1.62-11.11,2-21.1-2.52-31.89-26.41-63.14-33.44-129.87-31.51-197.26,2.67-93,8.67-185.93,12.45-278.92,3.57-87.85-.9-175.12-22.12-261-20.49-82.91-65.19-149.82-132.25-202.26-43.41-34-90.48-62.11-141.37-82.79-58.27-23.68-117.34-45.54-176.77-66.16-40.25-14-79.28-29.95-116.56-50.53-31.16-17.2-62.67-33.78-94.25-50.19-44.9-23.33-90.57-44.76-143.15-51.24-5.69-29.44-6.43-57.76,1.44-85.93a404.94,404.94,0,0,1,14.28-42.74c31.4-77.65,31.54-77.6,39.62-151.2,46.57-20.33,65.11-62,76-108.8a378.21,378.21,0,0,0,8.92-118.26c-1.52-17.94-1.29-34.81,7.11-51.93,5.79-11.8,6.67-26.18,8.81-39.55,4.24-26.37,9.34-52.39,25.24-76.87-25.81-22.28-29.63-47.09-9.74-75.43,3.84-5.48,1.88-15.37,1.67-23.2-.1-3.94-4.34-8.63-3.18-11.61,8.15-20.93.13-36.24-14.4-50.91-4.19-4.24-6.48-12.87-5.77-19,3.88-33.32-14.54-56.92-33.43-80.41-11.64-14.48-30.62-24.13-30-46.48a191,191,0,0,1-31.3-46.53c-6.74-13.8-23.54-18.47-38.49-21a543.19,543.19,0,0,0-57.06-6.51c-17.81-1.13-35.26-2.75-52.95-10.13-15.53-53.27-46.33-66.88-41.17-33-19.15-4.29-30.26-24.6-52.26-22.94l-7.79,16.29c-2.53.51-5.17,1.76-7.58,1.42-20.32-2.91-40.86-5-60.84-9.48-35.94-8.1-70.79-6.84-104.22,9.13A61.79,61.79,0,0,1,616,474.13c-20.71-5.42-40.57-1.76-60.74,3.41-28.13,7.22-54.28,18.92-79.06,33.59-10.5,6.22-21.74,13.18-28.94,22.63C423.4,565,397.52,595,381.07,631.42c-5.61,12.43-13.25,23.93-19.53,36.09-15.12,29.27-28.77,59.15-33.28,92.22-1.48,10.8-2.59,21.7-3,32.58s1.83,22.11,0,32.7-7.12,20.47-11.64,32.69c12.73,13.07,22.85,28.4,19.83,49.49-1.08,7.58.18,17.95,4.72,23.49,24.19,29.54,18.62,63.31,14.23,96.16-4.92,36.78-10.09,73.53-4.8,110.37,3.87,26.91,9.42,54,17.95,79.72,13.15,39.71,38.05,69.37,81.58,78.78,2.47.53,4.54,2.9,9.52,6.25,3.23,38.85,18.91,76.66,31,115.61,13.88,44.83,17.91,91.17,10,138.1-3.19,19-11.31,32.73-30.31,40.14-12.59,4.9-24.47,12.18-35.75,19.76q-95.42,64.18-190.35,129.06c-58.84,40.06-118.13,79.51-176.22,120.63A1040.71,1040.71,0,0,0-75.48,1985.07c-68.43,69.58-120.11,149-144.06,244.77-15.77,63.06-20.34,127.33-15,191.61,5.25,62.66,14.46,125.06,23.93,187.27,10.91,71.7,25.79,142.81,35.69,214.63,11.66,84.5,11.88,169.22-6.78,253.23-9.5,42.74-18.24,85.64-27.12,128.52-2.18,10.55-3.56,21.27-5.69,34.22,6.38,1.48,11.24,3.75,16,3.54q164.24-7,328.47-14.54C132.68,3228.2,135.31,3227.06,138,3226.39Z",
    "M1882.78,2381.1s0-177-16.72-295.1c-16.9-119.39-107.7-189.8-121.5-196.21-55.55-25.76-156.32-60.58-209.38-91.15-15.71-9.06-31.91-17.85-49.61-21.8-12.56-2.8-25.51-3.07-38.31-4.37-19.91-2-41.57-4-59.37-13.11-19.44-10-41.8-13-61.44-22.55-11.58-5.63-22-13.41-33.37-19.39-33.74-17.7-73.61-18.5-110-29.7a35.3,35.3,0,0,1-8.37-3.47,39,39,0,0,1-6.75-5.9c-6.68-6.83-13.5-13.79-22-18.22s-19-6-27.54-1.7c10-72.07-28.53-151.71,3-217.3l24.69-51.44c4.39-9.16,8.79-18.31,12.73-27.67,6.25-14.86,7.46-32.23,11.33-47.88,18.68.67,38.25,1.16,55-7.15,22.69-11.26,35-35.94,44.61-59.38a780.1,780.1,0,0,0,36-111.08c5.14-21.13,2-42,1.7-63.77a82.89,82.89,0,0,0-2-17.19,3.85,3.85,0,0,0-.9-2c-.78-.72-2-.66-3-.66a16.3,16.3,0,0,1-15.66-14.45c-.24-2.9.33-5.82.1-8.72s-1.21-5.48-1.55-8.26a18.61,18.61,0,0,1,1.77-10.49c.56-1.13,1.25-2.32,1-3.56-.25-1.51-1.71-2.45-2.88-3.45a12.39,12.39,0,0,1-3.15-14l5.15-11.63,0-.09a99.93,99.93,0,0,0,16.3-48.3c22.39-8.08,39-30.16,40.62-53.91.76-11.29-1.59-22.53-3.93-33.6q-10-47.33-20-94.65c12.61,10.39,17.08,29.52,10.38,44.42,14.91-26.71-3.91-65.62-34.12-70.49,2-13.23-1.48-26.59-4.9-39.52q-17.42-65.87-34.85-131.75l8.87,12c-22.12-61.23-74.12-106-124-147.77-17.19-14.4-34.54-28.91-54.34-39.42-17.83-9.47-37.29-15.51-56.94-20.19-97.48-23.21-199.72-13.8-298.55,2.77-29.45,4.94-62.22,12.74-77.94,38.14L678,368.4c-42.36,23.05-64.88,77.32-51.29,123.6l6.54,5.89C602.67,488.06,568.8,500,543,519c-12.1,8.93-23.16,19.53-31.21,32.23-9,14.15-14,30.61-24,44.1-18.89,25.68-53,37.63-69.44,64.94l5.33,5.31q-16.9,22.26-32.56,45.43c-2.13,3.16-4.32,6.57-4.33,10.38s3.24,7.85,7,7.17c1.28-.23,2.52-1,3.81-.78,1.89.29,2.91,2.57,2.63,4.46s-1.47,3.51-2.46,5.16c-8.54,14.13-2.78,36,12,43.42,1.18,14.66-11.2,29-25.88,30.06l9.41,7.28-6.93,5.2c4.3,2.53,5.7,8.35,4.56,13.21s-4.24,9-7.27,12.95c9,10.89,18.53,23,18.69,37.14,0,3-.2,6.47,2,8.5,1,.92,2.43,1.48,2.91,2.74a4.79,4.79,0,0,1-.18,2.89,62.25,62.25,0,0,0-1.16,27.22c2.06,11.46,6,22.66-.86,32.08-8.41.07-17,.18-24.86,3.24-14.15,5.52-23,19.46-30.05,32.9-4.27,8.12-8.32,16.54-9.75,25.6-3.82,24.14,11.35,47.68,10.49,72.11-.22,6.21-1.47,12.36-1.38,18.57.12,7.71,2.3,15.21,4.47,22.6,2.67,9.08,5.38,18.27,10.34,26.32,3.48,5.65,8,10.61,11.52,16.22s6.15,12,10,17.6c4.4,6.38,10.34,11.52,16.37,16.39,23.46,19,47.58,33.31,73.23,49.15a27.5,27.5,0,0,0,5.14,20.22c2.4,3.2,5.51,5.87,7.5,9.34s2.76,7.59,3.44,11.58q3.58,21,6.12,42.17c1,8,1.8,16,3.23,23.9.68,3.72,1.48,7.42,2,11.17.65,4.58.87,9.21,1.1,13.84,4.15,84.43,6.85,167.1,11,251.53,1.92-.23-.46-3-2.39-2.83-13.36,1-26,6.2-38.35,11.37l-96.46,40.34c-5.68,2.38-11.37,4.75-17.17,6.83-5,1.79-10.08,3.36-15,5.42-10.72,4.51-20.31,11.27-30.52,16.83-47.93,26-105.71,24-158.48,37.81-18.6,4.86-36.74,11.76-55.76,14.56-17.74,2.62-35.83,1.61-53.7,3.22-33.87,3.06-77.95,8.79-168.08,79.73s-126.2,523.24-126.2,523.24",
    "M-344.82,2404.18s46.38-136.43,107.86-291.75c58.21-147.06,171.13-250.22,204.05-259.75S125,1805.86,206.2,1792c9-1.54,18.23-3.15,26.1-7.78,9.08-5.35,16-14.51,26-17.65,7.05-2.21,14.76-1.12,21.92-3,17.47-4.47,27.06-24.62,44.2-30.22,11.56-3.78,24.82-.26,35.89-5.29,12.5-5.67,19.42-21,32.78-24.15,21.42-5,40.2,25,61.25,18.53,5.36-1.63,9.71-5.46,14-9a208.58,208.58,0,0,1,51.13-31c4.83-2,10-4.08,13.18-8.22,2.83-3.64,3.72-8.38,4.53-12.92,12.32-69,28-137.08,40.36-206.07-13.27-14.43-32.25-21.84-49.73-30.72s-35.17-21-41.34-39.66c-2.11-6.35-2.73-13.08-3.33-19.75L475.62,1281c-3.51-38.85-6.94-77.72-11.82-116.43-3.49-27.63-7.18-55.47-12.88-82.74-5.15-24.61-5.12-49.93-5.18-75.21,0-14.21.27-28.65,4.44-42.23,3.53-11.51,9.71-22,14.47-33,22.42-52.17,11.6-111.88,16.45-168.45C482.71,744.2,487,724,501.42,712c4-3.31,8.74-6,11.44-10.41,1.82-3,2.53-6.52,3.21-10,3.87-19.64,6.42-36.46,16.7-53.71a527.92,527.92,0,0,1,32.38-47.78c23.34-30.94,49.36-59.74,75.6-88.22q45.18-49.07,91.31-97.25c8.11-8.47,16.36-17,26.34-23.18,10.93-6.74,23.46-10.33,35.82-13.84C834.1,356.3,874.5,344.88,916,343.84c73.3-1.84,143.13,28.7,209.47,59.92,83.93,39.5,169.29,82.94,229.41,153.58s95,179.74,52.8,262.36c.51,8.59-.68,17.18-2,25.69a732.47,732.47,0,0,1-15.88,75c27.28,22.28,27.89,64.34,22.69,99.17a364.32,364.32,0,0,1-28.77,97.15c-10.4,22.8-24.36,44.7-42.89,61.76a109.65,109.65,0,0,1-30.6,20.42c-9.48,4.08-21.88,2.93-30.52,7.28-9.76,4.91-17.52,22.87-23,31.94-7.43,12.31-14.21,25-20.41,38a588.44,588.44,0,0,0-31,80.95c-18.76,61.16-30.87,124.13-40.88,187.25-10.16,64.1-17,129-15.89,194a707.52,707.52,0,0,0,7.49,92.85l5.64,1.34c24.91-7.15,54,5.44,65.86,28.49,1.77,3.45,3.27,7.2,6.2,9.74s6.92,3.55,10.62,4.84c19.42,6.81,33.62,23.94,52.51,32.09,4.3,1.86,8.87,3.27,12.62,6.06,4.69,3.49,7.63,8.78,11.24,13.39,14.74,18.77,39.68,25.3,61.44,35.11,29.65,13.37,55.29,34.3,84.3,49,21.29,10.81,44.21,18.18,65.2,29.55,27.79,15.06,51.4,36.69,77.78,54.08,39.11,25.77,132.68,41.89,208.54,141.62S1869.6,2404,1869.6,2404",
    "M1078,451.65c-10.8-5.95-22.25-11.09-34.43-13-9.43-1.47-19.39-1-28.06-5a15,15,0,0,1-7.81-10c-1.16-5,4.27-5.46,7.75-4.67,10.36,2.35,20.36,6.13,30.23,10,6.07,2.38,12.16,4.84,17.56,8.48,6.77,4.57,12.3,10.92,19.47,14.85C1081.39,453.27,1079.5,452.46,1078,451.65Zm1013.3,1971.43-110-396.95c-30.21-110-126-161-144.61-159.28-5.56-8.85-47.25-37.46-57.7-37.8-22.13-.72-116.23,11.26-136.06,1.42-11.85-5.88-62.64-22.5-73.7-29.76-23.57-15.48-95.09-1.18-121.89-9.93-21.41-7-166.79-22.18-188.2-29.16-4.44-1.45-9-3-12.63-5.91-3.38-2.75-5.76-6.6-9.23-9.24s-8.92-3.68-11.92-.51c-7.36-6.79-14.86-13.78-19.48-22.67-4.43-8.52-5.92-18.28-10-27s-12-16.86-21.62-16.35q-6-68.65-11.9-137.31c-.31-3.55-2.91-5.82.66-5.8,16.24-8.76,22.17-29.52,21.21-48s-7.12-36.28-8.19-54.71c-1.67-28.69,9-56.51,20-83.06,30.56-73.69,65.1-146,88-222.43,13.43-44.84,22.79-91,25.64-137.74,2.73-44.78-.52-89.68-3.77-134.42q-5.37-73.77-10.72-147.55c-2.43-33.32-5.14-67.72-20.67-97.29-13.83-26.36-36.68-46.63-59-66.29l-113.23-99.58c-23.61-20.76-49.43-42.52-80.72-45.52-8.74-.84-17.79-.18-26-3.17-29.31-10.61-26.91-54.32-48-77.3-13.34,13.75-35.44,14.38-53.94,9.4S858,314.71,839.19,311.06a91,91,0,0,0-61.1,9.76c-27.47,15.33-54.87,46.14-83.64,33.42-5.68-2.51-10.67-6.65-16.69-8.13-8.91-2.2-18,1.79-26.34,5.69L516.65,415.08c-5.93,2.78-12.45,6.2-14.45,12.44-1.66,5.15.29,10.67.79,16.06,2.19,23.6-22.33,39.87-43.51,50.5-56.73,28.49-115,70.19-142.86,127.24a166.2,166.2,0,0,0-13.38,36.87c-7.79,35.24-.32,71.83.16,107.91.45,32.46-4.79,64.78-4.55,97.23.72,98.44,51,188.83,99.87,274.28-16.53,54.94,4.39,113.72,33.44,163.75a155.57,155.57,0,0,1-17-100.47,2205.37,2205.37,0,0,0,81.7,225.47c12.49,29.39,25.84,58.86,45.76,83.82,25.79,32.31,61.16,55.32,95.88,77.76,7.87,45.15,8.63,93.48,13.9,139-1.37-3.46-6.78-3.37-9.34-.67s-3,6.7-3.37,10.4l-2.61,28.53c-8.48-6.48-22.79-2.3-26.44,7.73-12.82-1.89-25.62,4.12-35.77,12.18s-18.45,18.19-28.27,26.65c-30.67,26.41-72.79,34-112.72,40.67L364.13,1864c-4.93.83-10.09,1.74-14.08,4.76-4.68,3.54-6.94,9.35-10.37,14.11-7.62,10.57-20.64,15.56-33,19.71-81,27.23-171.81-3.32-291.65,82.76s-181.21,378.37-145.73,467.92",
    "M2061.58,2410.93c7.59-1.91,11.27-10.65,12-18.45s-.34-16,2.69-23.21c2.06-4.9,6-10.1,3.76-14.94a38.88,38.88,0,0,0-2.82-4.11c-1.5-2.37-2-5.23-2.4-8-8.62-56-13.8-114.09-40.38-164.1-7.11-13.38-15.68-26-21.84-39.83s-5.41-28.7-8.81-43.46c-18.39-80.07-80.34-148.71-158.12-175.17-23.38-8-48.05-12.37-70.4-22.88-21.41-10.07-40-25.43-61.33-35.66-25.33-12.16-53.62-16.66-79.83-26.79-28.45-11-53.9-28.37-80.85-42.65-94.08-49.86-203.15-60.6-306.15-87.54-7.39-1.93-14.92-4-21.15-8.44-7.3-5.19-12.12-13.07-17.17-20.47-18.68-27.33-43.68-49.33-71.9-66.63-10.24-77.76-3.3-158.32,12.22-234.93,5-24.74,8.2-61.82,22-83.3,5.53-8.62,11.45-8.11,20.88-8.72,13-.85,24.74-3.48,36.59-9.19,21.31-10.25,39-27.31,52.41-46.58,18.47-26.54,29.7-57.32,40.58-87.77,2.7-7.54,5.41-15.19,6.12-23.16,1-11.2-2-22.33-4.94-33.18-2.89-10.58-5.85-21.34-11.75-30.58-15.93-25-52.14-34-76.16-16.63-3.52-13.32,5.43-26.63,15.11-36.44s21.12-19.25,24.53-32.6c4.3-16.88-3.85-39.46,10.6-49.18l10.16,4.9,20.28-37.18a40.6,40.6,0,0,1-21.23-15.34c-1.78-7.46,10.72-7,18.08-9.12,8.43-2.43,12.07-12.5,12.25-21.26s-1.76-17.79.83-26.16c1.12-3.59,3.07-7.21,2.31-10.89-1.23-6-8.52-8.3-12.28-13.1-3.13-4-3.58-9.4-3.9-14.46l-3.09-48.37c-.58-9.17-1.82-19.58-9.26-25-8.47-6.13-24.11-5.63-25.06-16-.45-5,3.42-9.19,6.42-13.22a47.17,47.17,0,0,0,9-32.73c-.72-6.81-4-14.47-10.73-15.89,7.85-2,3.57-15.36-4.34-17.17s-16,2.18-24.09,2.13-17.19-8.86-12.21-15.27a40.35,40.35,0,0,1-23.42-6.81,94.67,94.67,0,0,0,3.13-38.31c-.81-6.56-9.1-14.33-12-8.41-10.52-3.94-9.76-18.69-9-29.9s-5.9-26.63-16.53-23c-5,1.71-7.55,7.07-10.95,11.12s-10.22,6.78-13.57,2.7c1.19-7.76.21-18.62-7.58-19.53-4.91-.58-8.85,3.63-13,6.28s-11.51,2.47-12.17-2.42c.93-7.85-5.15-15.87-13-17.12,7.43-2.85,5.14-14.48-.65-19.95s-14-9.3-16.36-16.92c-1.08-3.53-.67-7.38-1.68-10.94-2.08-7.36-10.88-12-18.13-9.58s-11.48,11.44-8.71,18.56c-14.9,2.47-33.24,3.61-41.9-8.75-2.64-3.77-4-8.42-7.17-11.74s-9.51-4.41-11.92-.5c2.6-7-8.91-10.77-15.56-7.47s-13,9.6-20.23,7.82a17.61,17.61,0,0,0,.87-14l-13.06-1.19c5.28-11.44-2.8-25.46-14-31.16s-24.47-5.31-37.06-4.78l-13.45.56c-5,.21-10.16.41-15-1a23.79,23.79,0,0,1-16.16-16.85c-14.59-2.54-32.46-3.87-41.29,8-5.28-8.13-17.86-8.36-26-3.07s-12.87,14.34-17.26,23L746.6,356.18a55.32,55.32,0,0,0-9.3,25.62c-11.13-1.76-18.37,13.83-29.63,14.3-4.54.19-8.73-2.17-12.82-4.14a86.5,86.5,0,0,0-61.22-5c-4.07,1.19-11.39,4.37-11.61,8.61,3,5-.85,11.52-5.68,14.79s-10.78,5-14.87,9.12c-6.52,6.62-5.69,18.93,1.65,24.63-8.66.18-3.22,18.69-11.63,20.78a7.93,7.93,0,0,1-4.89-.7c-5.78-2.45-9.94-7.53-14.93-11.33s-12.14-6.29-17.4-2.88c.84-5.17-7.1-8.05-11.2-4.79s-4.65,9.29-3.93,14.47,2.36,10.42,1.37,15.56c-.76,3.92-3,7.41-3.94,11.28-2.38,9.67,5,20.57,14.86,22C545.07,526.32,513,524.75,509,543.32c-.73,3.36-1.18,7.95-4.58,8.43-5.29.74-4.61-8.9-9-11.93-4.72-3.25-10,3.24-12.11,8.58l-8.45-1.8c1.56,12.73-11.43,22.1-16.45,33.9-5.61,13.21-.78,28.2,1.39,42.39a111,111,0,0,1-.08,34.08c-.66,4.15-1.7,8.54-4.74,11.43s-8.72,3.35-11.08-.13c-9.28,7.59-11.27,20.75-12.6,32.67l-.9,8.08a22.47,22.47,0,0,0,0,7c.6,2.94,2.35,5.5,4,8A290.91,290.91,0,0,1,457.69,766c5,11.17,8.65,26.12-.56,34.2-1.51,1.32-3.38,2.5-3.91,4.42-.43,1.57.15,3.22.73,4.74l15.33,40.23a61.48,61.48,0,0,0,4.28,9.59c2.41,4.12,5.74,7.63,8.34,11.63,10.51,16.19,7.69,37.3,4.47,56.34-4.79,28.42-20.29,53.51-22,82.28-9.52-14.5-31.95-15.24-46.49-5.78s-22.77,25.93-29.21,42c-5.85,14.64-10.85,30.15-9.58,45.85.75,9.37,3.7,18.39,6.7,27.29q19,56.39,41.57,111.5c2.28,5.56,6.45,12.21,12.35,11,1.7-.34,3.25-1.33,5-1.43,3.39-.18,5.85,3,8.33,5.29,8,7.4,21.88,7,29.42-.83,2.24,26.88,3,55.56,15,79.71a107.26,107.26,0,0,0,15.29,22.84c4.16,90.89-1,178.36-8.57,269a298.05,298.05,0,0,0-98,113.26l-309.8,115c-148.75,55.23-305.13,115.86-403.74,240.17-13.43,16.93-25.67,35-34.26,54.81-7.64,17.63-12.28,36.39-16.46,55.14-16.05,71.91-24.91,143-28.42,216.54",
    "M1906.61,2381.1c4-34.5-38.83-367.37-86-403.15-5.71-4.32-3.64-14-7.61-20-3.85-5.78-9.63-10-15.31-14a1981.36,1981.36,0,0,0-335.74-191.07c-11.26-5-22.86-10.15-31.52-18.93-4.58-4.65-8.17-10.17-12.39-15.15-21.45-25.32-56-33.94-87-45.83-59-22.64-114.82-62.88-165.46-100.71,12.78-31.51,26.34-62.8,43.16-92.35,32.77-57.59,77.91-108.6,101.27-170.61,28.31-75.15,18.86-158.46,7.21-237.92a72.54,72.54,0,0,0,34.75-46c3.44-14.5,2.29-29.64,1.11-44.49-3.37-42.68-6.75-85.42-13.6-127.68-2.21-13.66-4.79-27.33-4.93-41.17-.13-11.89,1.54-23.72,1.94-35.61,1-29.92-6-59.48-13.66-88.44q9,16.81,18,33.61a184.67,184.67,0,0,0-16.23-65.31c-2.47.52.56,4.75,2.59,3.25s1.59-4.63.85-7a118.08,118.08,0,0,0-32.54-51.72,72.84,72.84,0,0,1,23.36,16.42A260,260,0,0,0,1238.51,527c-5.08-3.54-10.73-7.53-11.87-13.61-.63-3.3.22-6.83-.88-10-1.63-4.7-6.83-7-9.92-10.94s-1.49-12,3.36-10.85A625.1,625.1,0,0,0,1070,391.43c-25.81-11-57.24-11.33-84.91-16,3.37.85,4.6-5.18,1.72-7.12s-6.73-.85-10,.26a453.36,453.36,0,0,1-125.25,23.21c-24.93,1-50.45.12-74.15,7.9-19,6.24-39.11,18-57.6,10.37q.94,6,1.9,11.93c-1.3-3.55-7.2-2.23-8.82,1.19s-.73,7.42-.87,11.2c-.5,13.65-15.11,23.3-28.77,23.41s-26.32-6.62-38.3-13.18l23.35,19a52.33,52.33,0,0,0-46.8,16.94l12.44,1.69c-23,3.44-40.66,21.5-56.18,38.8q-39.33,43.83-76.07,89.88c-5.24,6.56-10.54,13.35-13.07,21.36-2,6.19-2.15,12.78-2.29,19.27a1745.28,1745.28,0,0,0,9.83,226.06c2.79,25.62,17.88,67.47,5.68,91.11-7.38,14.3-18,24.9-23.45,40.76-5.33,15.58-7.85,32.1-8.59,48.52-2.05,45.44,8.55,91.2,29.35,131.59,16.42,31.9,48.76,90.78,92.8,76.53,3.63,85.11-5.73,165.75-27.42,250.79-10.28,4.18-16.29-14.49-27.31-15.85-3.07-.38-6.11.7-9,1.82-51.46,19.92-94.53,56.22-140.25,87.13-87.08,58.89-388.52,244.86-479.5,297.53-92.22,53.39-94.43,224.92-99.4,234-4.47,8.16,14.55,75.48,13.65,84.75-6.82,69.71-30.46,82-30.74,152,0,8.45.79,18.44,8,22.82"
]

window.addEventListener("load", () => {
    let presentationPage = 1;
    document.getElementById("next").addEventListener("click", () => {
        presentationPage++;
        if (presentationPage === 6) {
            document.getElementById("next").style.display = "none";
            document.getElementById("finish").style.display = "inline";
        }
        displayText(presentationPage, presentationPage - 1);
        document.getElementById("back").removeAttribute("disabled");
    });
    document.getElementById("back").addEventListener("click", () => {
        presentationPage--;
        if (presentationPage === 1) {
            document.getElementById("back").setAttribute("disabled", "true");
        }
        displayText(presentationPage, presentationPage + 1);
        document.getElementById("finish").style.display = "none";
        document.getElementById("next").style.display = "inline";
    });

    document.getElementById("finish").addEventListener("click", () => {
        //Flip all Buttons
        setUItoCanvas();
        //Activate the canvas
    });

    document.getElementById("reset").addEventListener("click", () => {
        presentationPage = 1;
        setUItoStart();
    });

    setUItoStart();
})


function displayText(presentationPage, previousPage) {
    document.getElementById(`question_${presentationPage}`).classList.remove("hidden");
    document.getElementById(`page_${presentationPage}`).classList.add("active");
    if (previousPage != 0) {
        document.getElementById(`question_${previousPage}`).classList.add("hidden");
        document.getElementById(`page_${previousPage}`).classList.remove("active");
    }
}

function hideSlides() {
    //Hide all slides
    document.querySelectorAll(".slide").forEach(element => {
        element.classList.add("hidden");
    });
}

function resetIndicator() {
    //Reset Indicator
    document.querySelectorAll(".indicator").forEach(element => {
        element.classList.remove("active");
    });
}

function deactivateAllButtons() {
    //Deactivate all Buttons
    document.getElementById("reset").style.display = "none";
    document.getElementById("finish").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("next").style.display = "none";
}

function resetSliders() {
    document.querySelectorAll(".slider").forEach(element => {
        element.valueAsNumber = 0;
    });
}

function setUItoStart() {
    resetSliders();
    hideSlides();
    deactivateAllButtons();
    resetIndicator();
    displayText(1, 0);

    document.getElementById("indicatorContainer").classList.remove("hidden");

    document.getElementById("back").setAttribute("disabled", "true");
    document.getElementById("back").style.display = "inline";
    document.getElementById("next").style.display = "inline";
    document.body.style.backgroundImage = "url('src/assets/svg/1920x1080-hg.png')";
}

function setUItoCanvas() {
    hideSlides();
    resetIndicator();
    //Deactivate the Buttons which are no longer needed
    deactivateAllButtons();
    //Activate the reset Button
    document.getElementById("reset").style.display = "inline";
    //Hide the indicator
    document.getElementById("indicatorContainer").classList.add("hidden");
    //Show the canvas
    document.getElementById("result").classList.remove("hidden");

    document.body.style.background = "white"

    draw();
}


const colors = Array(300).fill(1).map((_, index) => {
    return { h: index, s: 95, l: 50 }
});

const draw = () => {

    const currentOffset = document.querySelector('#slider_1').valueAsNumber;

    const currentColor = document.querySelector('#slider_2').valueAsNumber;

    const currentPath = document.querySelector('#slider_3').valueAsNumber % 10;

    const firstBlobSeed = document.querySelector('#slider_4').valueAsNumber + 1;

    const secondBlobSeed = document.querySelector('#slider_5').valueAsNumber + 1;

    const widthPill = (document.querySelector('#slider_6').valueAsNumber % 15) + 5;

    document.getElementById("pill").style.width = `${widthPill}%`;

    const canvas = document.querySelector('#canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;

    const ctx = canvas.getContext("2d");

    const scale = 0.55;
    ctx.scale(scale, scale);

    const colorOffset = 15;

    const color = colors[currentColor];
    const lightColor = getHSL(color, colorOffset);
    const darkColor = getHSL(color, colorOffset * -1);

    const pill = document.getElementById("pill");
    pill.style.filter = `hue-rotate(${color.h}deg) saturate(${color.s}%) brightness(${color.l}%)`;

    const gradient = ctx?.createLinearGradient(0, 1000, 1000, 1000);
    gradient?.addColorStop(0, darkColor);
    gradient?.addColorStop(1, lightColor);

    const path2d = new Path2D(paths[currentPath]);

    const baseOffset = 700;
    const innerSilhouetteOffset = 100;
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 5;
    ctx.translate(baseOffset + innerSilhouetteOffset, -250);
    ctx.stroke(path2d);

    ctx.translate(innerSilhouetteOffset * -1, 250);
    ctx.translate(currentOffset, -250);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 50 * (1 + (1 - scale));
    ctx.globalAlpha = .75;
    ctx.stroke(path2d);

    ctx.globalAlpha = 1;

    ctx.translate(currentOffset * -1, 250);
    const blobPath = getBlob(firstBlobSeed * Math.random(), 512, 320, 512);
    ctx.lineWidth = 15 * (1 + (1 - scale));
    ctx.strokeStyle = darkColor;
    ctx.stroke(blobPath);


    const secondBlobGradient = ctx.createLinearGradient(0, 0, 1000, 1000);
    secondBlobGradient.addColorStop(0, darkColor);
    secondBlobGradient.addColorStop(1, lightColor);

    ctx.lineWidth = 1;
    ctx.strokeStyle = secondBlobGradient;

    let lastBlobSize = -1;
    let lastBlobX = -1;
    let lastBlobY = -1;
    const secondBlobRandomSeed = Math.random();
    for (let i = 0; i < 15; i++) {
        let blobSizeDiff = lastBlobSize * (1 - secondBlobSizeFactor);

        let blobSize = lastBlobSize * secondBlobSizeFactor;
        let blobX = lastBlobX + blobSizeDiff / 2;
        let blobY = lastBlobY + blobSizeDiff / 2;

        if (lastBlobSize === -1) {
            blobSize = secondBlobInitSize;
        }
        if (lastBlobX === -1) {
            blobX = secondBlobInitX;
        }
        if (lastBlobY === -1) {
            blobY = secondBlobInitY;
        }
        const secondBlobPath = getBlob(
            secondBlobSeed * secondBlobRandomSeed,
            blobSize,
            blobX,
            blobY
        );

        ctx.stroke(secondBlobPath);

        lastBlobSize = blobSize;
        lastBlobX = blobX;
        lastBlobY = blobY;
    }
};

function getHSL(color, brightnessOffset) {
    return `hsl(${color.h}, ${color.s}%, ${color.l + brightnessOffset}%)`;
}

function getBlob(seed, size, x, y) {
    return blobs2.canvasPath(
        {
            seed,
            extraPoints: 8,
            randomness: 16,
            size,
        },
        {
            offsetX: x,
            offsetY: y,
        }
    )
}