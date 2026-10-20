(() => {
  "use strict";

  const dialog = document.getElementById("infoDialog");
  const title = document.getElementById("dialogTitle");
  const text = document.getElementById("dialogText");
  const closeButtons = [
    document.getElementById("closeDialog"),
    document.getElementById("dialogOkay")
  ];

  const messages = {
    surveys: ["Surveys aren't connected yet", "Survey providers must be approved and integrated before live offers can be shown. Reward amounts, eligibility, and completion rules will be displayed before a user starts."],
    apps: ["App and game offers aren't connected yet", "This section will show offers only after a verified partner integration is configured. Completing an offer does not guarantee a reward unless the partner confirms it."],
    offers: ["Partner offers aren't connected yet", "Offerwalls are not active in this preview. Before launch, each provider's tracking, terms, privacy requirements, and reward callbacks need to be tested."],
    balance: ["About your balance", "The balance is zero in preview mode. No real earnings are recorded here. A production balance must come from verified server-side records, never from a value users can change in their browser."],
    account: ["Account setup is next", "Supabase authentication and account data need to be connected to this page before sign-in, balances, or personal history can work. This preview does not ask for or store personal information."]
  };

  function openInfo(key) {
    const item = messages[key] || messages.account;
    title.textContent = item[0];
    text.textContent = item[1];
    if (typeof dialog.showModal === "function") dialog.showModal();
    else window.alert(item[0] + "\n\n" + item[1]);
  }

  document.querySelectorAll("[data-info]").forEach((button) => {
    button.addEventListener("click", () => openInfo(button.dataset.info));
  });

  document.getElementById("balanceInfo").addEventListener("click", () => openInfo("balance"));
  document.getElementById("accountButton").addEventListener("click", () => openInfo("account"));
  document.getElementById("navAccount").addEventListener("click", () => openInfo("account"));
  document.getElementById("referralButton").addEventListener("click", () => {
    const status = document.getElementById("copyMessage");
    status.textContent = "Referral rewards aren't active in preview mode.";
  });

  closeButtons.forEach((button) => button.addEventListener("click", () => dialog.close()));
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();