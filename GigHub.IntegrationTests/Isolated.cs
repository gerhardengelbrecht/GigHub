using NUnit.Framework;
using System;
// using System.Transactions;

namespace GigHub.IntegrationTests
{
    public class Isolated :  Attribute, ITestAction
    {
        //public TransactionScope _transactionScope { get; set; }

        public void BeforeTest(TestDetails testDetails)
        {
          //  _transactionScope = new TransactionScope();
        }

        public void AfterTest(TestDetails testDetails)
        {
            // _transactionScope.Dispose();
        }

        public ActionTargets Targets
        {
            get { return ActionTargets.Test; }
        }
    }
}
