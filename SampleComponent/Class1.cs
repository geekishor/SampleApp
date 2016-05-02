using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.Foundation;
using Windows.Storage;
using Windows.UI.Popups;
using Windows.UI.Xaml;


namespace SampleComponent
{
    public sealed class Example
    {
        public static string helloworld()
        {
            return "Kishor";
        }

        public IAsyncOperation<string> CreateAppFolder(string folderName)
        {
            return CreateAppFolderAsync(folderName).AsAsyncOperation();
        }

        private async Task<string> CreateAppFolderAsync(string folderName)
        {
            try
            {
                StorageFolder localFolder = ApplicationData.Current.LocalFolder;
                string desiredName = folderName;
                StorageFolder newFolder = await localFolder.CreateFolderAsync(desiredName, CreationCollisionOption.OpenIfExists);
                return "success";
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public IAsyncOperation<string> CreateFile(string fileName)
        {
            return CreateFileAsync(fileName).AsAsyncOperation();
        }

        private async Task<string> CreateFileAsync(string fileName)
        {
            try
            {
                StorageFolder folder = Windows.Storage.ApplicationData.Current.LocalFolder;
                string desiredFileName = fileName;
                StorageFile sampleFile = await folder.CreateFileAsync(desiredFileName, CreationCollisionOption.ReplaceExisting);
                return "file creation success";
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public IAsyncOperation<string> WriteFile(string text)
        {
            return WriteFileAsync(text).AsAsyncOperation();
        }

        private async Task<string> WriteFileAsync(string text)
        {
            try
            {
                StorageFolder folder = Windows.Storage.ApplicationData.Current.LocalFolder;
                //string Text = text;
                StorageFile sampleFile = await folder.CreateFileAsync("kishor.txt", CreationCollisionOption.OpenIfExists);
                
                await Windows.Storage.FileIO.AppendTextAsync(sampleFile, text);

                return "Writing into file success!";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public IAsyncOperation<string> ReadFile()
        {
            return ReadFileAsync().AsAsyncOperation();
        }

        private async Task<string> ReadFileAsync()
        {
            string userinfo = string.Empty;
            try
            {
                var storageFolder = ApplicationData.Current.LocalFolder;
                using (var sampleFile = await storageFolder.OpenStreamForReadAsync("credentials.txt"))
                {
                    using (StreamReader streamreader = new StreamReader(sampleFile))
                    {
                        userinfo = streamreader.ReadToEnd();
                    }
                }
                return userinfo;
            }
            catch(Exception)
            {
                return userinfo;
            }
        }
    }
}
